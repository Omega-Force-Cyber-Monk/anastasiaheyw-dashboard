import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { arthurFetch } from "~/server/arthur/client";

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
  notes?: string | unknown[];
  commentary?: string | unknown[];
  financial_status?: string | unknown[];
  rent_status?: string | unknown[];
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
   * Get all properties, units, and tenancies from the database.
   */
  getPropertiesAndUnits: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.db.arthurProperty.findMany({
        include: {
          units: {
            include: {
              tenancies: {
                orderBy: {
                  startDate: "desc",
                },
              },
            },
            orderBy: {
              name: "asc",
            },
          },
        },
        orderBy: {
          name: "asc",
        },
      });
    } catch (error) {
      console.error("Error fetching properties and units:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch properties and units from database",
      });
    }
  }),

  getAuthUrl: publicProcedure.query(() => {
    const clientId = process.env.ARTHUR_CLIENT_ID ?? "";
    let redirectUri =
      process.env.ARTHUR_REDIRECT_URI ??
      "https://anastasiaheyw-dashboard.vercel.app/api/arthur/callback";
    if (!redirectUri.includes("/api/arthur/callback")) {
      redirectUri = redirectUri.replace(/\/$/, "") + "/api/arthur/callback";
    }
    const state =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    return `https://auth.arthuronline.co.uk/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
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
          property: t.unit.property.name,
        };
      });

      return {
        tenancies: mapped,
        isMock: false,
      };
    } catch (error) {
      console.error("Error fetching tenancies:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch tenancies from database",
      });
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
      }),
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
      const propertiesRes = (await arthurFetch("v2/properties")) as
        | { data?: ArthurPropertyApi[] }
        | undefined;
      const properties = propertiesRes?.data ?? [];
      logs.push(`Retrieved ${properties.length} properties from Arthur.`);

      // 2. Fetch units
      logs.push("Fetching individual rentable units...");
      const unitsRes = (await arthurFetch("v2/units")) as
        | { data?: ArthurUnitApi[] }
        | undefined;
      const units = unitsRes?.data ?? [];
      logs.push(`Retrieved ${units.length} units from Arthur.`);

      // 3. Fetch tenancies
      logs.push("Fetching active lease agreements and tenant details...");
      const tenanciesRes = (await arthurFetch("v2/tenancies")) as
        | { data?: ArthurTenancyApi[] }
        | undefined;
      const tenancies = tenanciesRes?.data ?? [];
      logs.push(`Retrieved ${tenancies.length} tenancies from Arthur.`);

      // Ensure fallback property exists
      const fallbackPropertyId = "default_arthur_property";
      await ctx.db.arthurProperty.upsert({
        where: { id: fallbackPropertyId },
        update: {},
        create: {
          id: fallbackPropertyId,
          name: "General Property Block",
          address: "Arthur Online Registered Units",
        },
      });

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
      const knownPropIds = new Set(properties.map((p) => String(p.id)));
      for (const unit of units) {
        const propId = knownPropIds.has(String(unit.property_id))
          ? String(unit.property_id)
          : fallbackPropertyId;

        await ctx.db.arthurUnit.upsert({
          where: { id: String(unit.id) },
          update: {
            propertyId: propId,
            name: unit.name ?? unit.unit_number ?? "Unit",
            status: unit.status ?? "Vacant",
          },
          create: {
            id: String(unit.id),
            propertyId: propId,
            name: unit.name ?? unit.unit_number ?? "Unit",
            status: unit.status ?? "Vacant",
          },
        });
      }

      logs.push(
        "Writing tenancies to local database & merging custom notes...",
      );
      for (const tenancy of tenancies) {
        const unitId = String(tenancy.unit_id);

        // Ensure unit exists in DB before upserting tenancy
        const existingUnit = await ctx.db.arthurUnit.findUnique({
          where: { id: unitId },
        });

        if (!existingUnit) {
          await ctx.db.arthurUnit.upsert({
            where: { id: unitId },
            update: {},
            create: {
              id: unitId,
              propertyId: fallbackPropertyId,
              name: tenancy.address ?? `Unit ${unitId}`,
              status: "Occupied",
            },
          });
        }
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

        const rentVal =
          parseFloat(tenancy.rent_amount ?? tenancy.rent ?? "0.0") || 0.0;
        const depositVal =
          parseFloat(tenancy.deposit_amount ?? tenancy.deposit ?? "0.0") || 0.0;
        const rentStr =
          tenancy.rent ??
          `£ ${rentVal.toLocaleString("en-GB", { minimumFractionDigits: 2 })}`;
        const depositStr =
          tenancy.deposit ??
          `£ ${depositVal.toLocaleString("en-GB", { minimumFractionDigits: 2 })}`;

        // Check if there are local overrides already
        const existingTenancy = await ctx.db.arthurTenancy.findUnique({
          where: { id: String(tenancy.id) },
        });

        let commentary = "";
        if (
          typeof existingTenancy?.commentary === "string" &&
          existingTenancy.commentary
        ) {
          commentary = existingTenancy.commentary;
        } else if (typeof tenancy.notes === "string") {
          commentary = tenancy.notes;
        } else if (typeof tenancy.commentary === "string") {
          commentary = tenancy.commentary;
        } else if (Array.isArray(tenancy.notes)) {
          commentary = tenancy.notes
            .filter((n): n is string => typeof n === "string")
            .join("\n");
        } else if (Array.isArray(tenancy.commentary)) {
          commentary = tenancy.commentary
            .filter((c): c is string => typeof c === "string")
            .join("\n");
        }

        let rentStatus = "";
        if (
          typeof existingTenancy?.rentStatus === "string" &&
          existingTenancy.rentStatus
        ) {
          rentStatus = existingTenancy.rentStatus;
        } else if (typeof tenancy.rent_status === "string") {
          rentStatus = tenancy.rent_status;
        } else if (typeof tenancy.financial_status === "string") {
          rentStatus = tenancy.financial_status;
        }

        // Determine occupancy status
        let mappedStatus = "Vacant";
        if (
          tenancy.status?.toLowerCase() === "active" ||
          tenancy.status?.toLowerCase() === "occupied"
        ) {
          mappedStatus = "Occupied";
        } else if (
          tenancy.status?.toLowerCase() === "past" ||
          tenancy.status?.toLowerCase() === "moved out"
        ) {
          mappedStatus = "Moved out";
        }

        // Letting type mapping
        let lettingType = "FIXED TERM";
        if (
          tenancy.letting_type?.toLowerCase()?.includes("rolling") ||
          tenancy.tenancy_type?.toLowerCase()?.includes("rolling")
        ) {
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
      if (
        errMsg.includes("Cloudflare") ||
        errMsg.includes("403") ||
        errMsg.includes("401")
      ) {
        logs.push(
          "💡 Solution: Your OAuth session is expired or restricted by Cloudflare. Please click 'Reconnect Arthur Online' in Settings to authenticate a fresh live session, or use 'Mock Connect (Dev)' for instant testing.",
        );
      }
      return {
        success: false,
        logs,
      };
    }
  }),
});
