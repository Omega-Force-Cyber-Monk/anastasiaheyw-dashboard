import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { arthurFetch } from "~/server/arthur/client";
import { arthurTenancies } from "~/app/_components/admin/arthurData";

export interface ArthurPropertyApi {
  id: number | string;
  name?: string;
  address_line_1?: string;
  postcode?: string;
}

export interface ArthurUnitApi {
  id: number | string;
  property_id: number | string;
  name?: string;
  unit_number?: string;
  status?: string;
}

export interface ArthurTenancyApi {
  id: number | string;
  unit_id: number | string;
  status?: string;
  start_date?: string;
  end_date?: string;
  rent_amount?: string;
  rent?: string;
  deposit_amount?: string;
  deposit?: string;
  deposit_lodged?: string;
  deposit_received?: string;
  letting_type?: string;
  tenancy_type?: string;
  notes?: string;
  commentary?: string;
  financial_status?: string;
  rent_status?: string;
  address?: string;
  code?: string;
  tenant_name?: string;
  tenant?: {
    first_name?: string;
    last_name?: string;
    mobile_phone?: string;
    email?: string;
  };
  tenants?: Array<{
    first_name?: string;
    last_name?: string;
    mobile_phone?: string;
    email?: string;
  }>;
}

export const arthurRouter = createTRPCRouter({
  /**
   * Check if Arthur Online integration is connected.
   */
  checkConnection: publicProcedure.query(async ({ ctx }) => {
    try {
      const token = await ctx.db.arthurToken.findUnique({
        where: { id: "singleton" },
      });
      return { connected: !!token };
    } catch (error) {
      console.error("Error checking Arthur connection:", error);
      return { connected: false };
    }
  }),

  /**
   * Get Arthur OAuth authorization URL.
   */
  getAuthUrl: publicProcedure.query(() => {
    return `https://system.arthuronline.co.uk/oauth/authorise?client_id=${process.env.ARTHUR_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.ARTHUR_REDIRECT_URI!)}&response_type=code`;
  }),

  /**
   * Developer bypass to connect a mock token for testing.
   */
  mockConnect: publicProcedure.mutation(async ({ ctx }) => {
    const expiresAt = new Date(Date.now() + 3600 * 1000 * 24); // 24 hours
    return await ctx.db.arthurToken.upsert({
      where: { id: "singleton" },
      update: {
        accessToken: "mock_access_token",
        refreshToken: "mock_refresh_token",
        expiresAt,
      },
      create: {
        id: "singleton",
        accessToken: "mock_access_token",
        refreshToken: "mock_refresh_token",
        expiresAt,
      },
    });
  }),

  /**
   * Get all properties, units, and tenancies.
   * Falls back to mock data if no sync has run yet.
   */
  getTenancies: publicProcedure.query(async ({ ctx }) => {
    try {
      const dbTenancies = await ctx.db.arthurTenancy.findMany({
        include: {
          unit: {
            include: {
              property: true,
            },
          },
        },
        orderBy: {
          id: "asc",
        },
      });

      if (dbTenancies.length === 0) {
        // Return fallback mock data
        return {
          tenancies: arthurTenancies,
          isMock: true,
        };
      }

      // Map DB schema to UI expected format (TenancyRecord)
      const mapped = dbTenancies.map((t) => {
        let address = t.address ?? t.unit.property.address;
        if (!t.address && t.unit.name) {
          address = `${t.unit.name}, ${address}`;
        }

        return {
          id: t.id,
          unit: t.unit.name ?? "Unit",
          rent: t.rent,
          rentVal: t.rentVal,
          deposit: t.deposit,
          depositVal: t.depositVal,
          lodged: t.lodged ?? "—",
          received: t.received ?? "—",
          tenants: t.tenants,
          phone: t.phone,
          email: t.email,
          startDate: t.startDate ?? "—",
          endDate: t.endDate ?? "—",
          status: t.status,
          lettingType: t.lettingType,
          rentStatus: t.rentStatus,
          commentary: t.commentary,
          address: address ?? "",
          code: t.code ?? "",
        };
      });

      return {
        tenancies: mapped,
        isMock: false,
      };
    } catch (error) {
      console.error("Error fetching tenancies:", error);
      return {
        tenancies: arthurTenancies,
        isMock: true,
      };
    }
  }),

  /**
   * Update tenancy notes (commentary & rent status) locally.
   */
  updateTenancyNotes: publicProcedure
    .input(
      z.object({
        id: z.string(),
        commentary: z.string(),
        rentStatus: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.arthurTenancy.update({
        where: { id: input.id },
        data: {
          commentary: input.commentary,
          rentStatus: input.rentStatus,
        },
      });
    }),

  /**
   * Pull live data from Arthur Online API and sync with local DB cache.
   */
  syncArthur: publicProcedure.mutation(async ({ ctx }) => {
    const logs: string[] = ["Initializing connection to Arthur Online API..."];
    
    try {
      // 1. Fetch properties
      logs.push("Authorized successfully. Fetching properties...");
      const propertiesRes = (await arthurFetch("v2/properties")) as { data?: ArthurPropertyApi[] } | undefined;
      const properties = propertiesRes?.data ?? [];
      logs.push(`Retrieved ${properties.length} properties from Arthur.`);

      // 2. Fetch units
      logs.push("Fetching individual rentable units...");
      const unitsRes = (await arthurFetch("v2/units")) as { data?: ArthurUnitApi[] } | undefined;
      const units = unitsRes?.data ?? [];
      logs.push(`Retrieved ${units.length} units from Arthur.`);

      // 3. Fetch tenancies
      logs.push("Fetching active lease agreements and tenant details...");
      const tenanciesRes = (await arthurFetch("v2/tenancies")) as { data?: ArthurTenancyApi[] } | undefined;
      const tenancies = tenanciesRes?.data ?? [];
      logs.push(`Retrieved ${tenancies.length} tenancies from Arthur.`);

      logs.push("Writing properties to local database...");
      for (const prop of properties) {
        await ctx.db.arthurProperty.upsert({
          where: { id: String(prop.id) },
          update: {
            name: prop.name ?? prop.address_line_1 ?? "Arthur Block",
            address: prop.address_line_1 ?? prop.postcode ?? "",
          },
          create: {
            id: String(prop.id),
            name: prop.name ?? prop.address_line_1 ?? "Arthur Block",
            address: prop.address_line_1 ?? prop.postcode ?? "",
          },
        });
      }

      logs.push("Writing units to local database...");
      for (const unit of units) {
        await ctx.db.arthurUnit.upsert({
          where: { id: String(unit.id) },
          update: {
            propertyId: String(unit.property_id),
            name: unit.name ?? unit.unit_number ?? "Unit",
            status: unit.status ?? "Vacant",
          },
          create: {
            id: String(unit.id),
            propertyId: String(unit.property_id),
            name: unit.name ?? unit.unit_number ?? "Unit",
            status: unit.status ?? "Vacant",
          },
        });
      }

      logs.push("Writing tenancies to local database & merging custom notes...");
      for (const tenancy of tenancies) {
        // Extract tenants, email, phone list
        const tenantsList: string[] = [];
        const phonesList: string[] = [];
        const emailsList: string[] = [];

        if (Array.isArray(tenancy.tenants)) {
          for (const t of tenancy.tenants) {
            const name = [t.first_name, t.last_name].filter(Boolean).join(" ");
            if (name) tenantsList.push(name);
            if (t.mobile_phone) phonesList.push(t.mobile_phone);
            if (t.email) emailsList.push(t.email);
          }
        } else if (tenancy.tenant) {
          const t = tenancy.tenant;
          const name = [t.first_name, t.last_name].filter(Boolean).join(" ");
          if (name) tenantsList.push(name);
          if (t.mobile_phone) phonesList.push(t.mobile_phone);
          if (t.email) emailsList.push(t.email);
        } else if (tenancy.tenant_name) {
          tenantsList.push(tenancy.tenant_name);
        }

        const rentVal = parseFloat(tenancy.rent_amount ?? tenancy.rent ?? "0.0") || 0.0;
        const depositVal = parseFloat(tenancy.deposit_amount ?? tenancy.deposit ?? "0.0") || 0.0;
        const rentStr = tenancy.rent ?? `£ ${rentVal.toLocaleString("en-GB", { minimumFractionDigits: 2 })}`;
        const depositStr = tenancy.deposit ?? `£ ${depositVal.toLocaleString("en-GB", { minimumFractionDigits: 2 })}`;

        // Check if there are local overrides already
        const existingTenancy = await ctx.db.arthurTenancy.findUnique({
          where: { id: String(tenancy.id) },
        });

        const commentary = existingTenancy?.commentary ?? tenancy.notes ?? tenancy.commentary ?? "";
        const rentStatus = existingTenancy?.rentStatus ?? tenancy.rent_status ?? tenancy.financial_status ?? "";

        // Determine occupancy status
        let mappedStatus = "Vacant";
        if (tenancy.status?.toLowerCase() === "active" || tenancy.status?.toLowerCase() === "occupied") {
          mappedStatus = "Occupied";
        } else if (tenancy.status?.toLowerCase() === "past" || tenancy.status?.toLowerCase() === "moved out") {
          mappedStatus = "Moved out";
        }

        // Letting type mapping
        let lettingType = "FIXED TERM";
        if (tenancy.letting_type?.toLowerCase()?.includes("rolling") || tenancy.tenancy_type?.toLowerCase()?.includes("rolling")) {
          lettingType = "AST ROLLING";
        } else if (tenancy.status?.toLowerCase() === "past") {
          lettingType = "PREVIOUS TENANT";
        }

        await ctx.db.arthurTenancy.upsert({
          where: { id: String(tenancy.id) },
          update: {
            unitId: String(tenancy.unit_id),
            status: mappedStatus,
            startDate: tenancy.start_date ?? null,
            endDate: tenancy.end_date ?? null,
            rent: rentStr,
            rentVal,
            deposit: depositStr,
            depositVal,
            lodged: tenancy.deposit_lodged ?? null,
            received: tenancy.deposit_received ?? null,
            tenants: tenantsList,
            phone: phonesList,
            email: emailsList,
            lettingType,
            rentStatus,
            commentary,
            address: tenancy.address ?? null,
            code: tenancy.code ?? null,
          },
          create: {
            id: String(tenancy.id),
            unitId: String(tenancy.unit_id),
            status: mappedStatus,
            startDate: tenancy.start_date ?? null,
            endDate: tenancy.end_date ?? null,
            rent: rentStr,
            rentVal,
            deposit: depositStr,
            depositVal,
            lodged: tenancy.deposit_lodged ?? null,
            received: tenancy.deposit_received ?? null,
            tenants: tenantsList,
            phone: phonesList,
            email: emailsList,
            lettingType,
            rentStatus,
            commentary,
            address: tenancy.address ?? null,
            code: tenancy.code ?? null,
          },
        });
      }

      logs.push("Database sync completed successfully!");
      return {
        success: true,
        logs,
      };
    } catch (err) {
      console.error("Arthur synchronization failed:", err);
      const errMsg = err instanceof Error ? err.message : "Unknown error";
      logs.push(`Sync failed: ${errMsg}`);
      return {
        success: false,
        logs,
      };
    }
  }),
});
