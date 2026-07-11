import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const maintenanceRouter = createTRPCRouter({
  createReport: protectedProcedure
    .input(
      z.object({
        issue: z.string().min(1),
        priority: z.string().min(1),
        unitName: z.string().min(1),
        propertyName: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const email = ctx.session.user.email;
      const name = ctx.session.user.name ?? "Tenant";
      if (!email) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "No email address associated with session.",
        });
      }

      return ctx.db.maintenanceReport.create({
        data: {
          userEmail: email.trim().toLowerCase(),
          userName: name,
          unitName: input.unitName,
          propertyName: input.propertyName,
          issue: input.issue,
          priority: input.priority,
          status: "PENDING",
        },
      });
    }),

  getTenantReports: protectedProcedure.query(async ({ ctx }) => {
    const email = ctx.session.user.email;
    if (!email) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "No email address associated with session.",
      });
    }

    return ctx.db.maintenanceReport.findMany({
      where: {
        userEmail: email.trim().toLowerCase(),
      },
      orderBy: {
        reportedDate: "desc",
      },
    });
  }),

  createReading: protectedProcedure
    .input(
      z.object({
        type: z.string().min(1),
        value: z.string().min(1),
        unitName: z.string().min(1),
        propertyName: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const email = ctx.session.user.email;
      const name = ctx.session.user.name ?? "Tenant";
      if (!email) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "No email address associated with session.",
        });
      }

      return ctx.db.meterReading.create({
        data: {
          userEmail: email.trim().toLowerCase(),
          userName: name,
          unitName: input.unitName,
          propertyName: input.propertyName,
          type: input.type,
          value: input.value,
        },
      });
    }),

  getTenantReadings: protectedProcedure.query(async ({ ctx }) => {
    const email = ctx.session.user.email;
    if (!email) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "No email address associated with session.",
      });
    }

    return ctx.db.meterReading.findMany({
      where: {
        userEmail: email.trim().toLowerCase(),
      },
      orderBy: {
        loggedDate: "desc",
      },
    });
  }),

  getAdminReports: protectedProcedure
    .input(
      z.object({
        page: z.number().int().min(1).default(1),
        limit: z.number().int().min(1).default(7),
      })
    )
    .query(async ({ ctx, input }) => {
      const skip = (input.page - 1) * input.limit;
      const [reports, total] = await Promise.all([
        ctx.db.maintenanceReport.findMany({
          skip,
          take: input.limit,
          orderBy: {
            reportedDate: "desc",
          },
        }),
        ctx.db.maintenanceReport.count(),
      ]);

      const totalPages = Math.ceil(total / input.limit);

      return {
        data: {
          reports: reports.map((r) => ({
            id: r.id,
            title: r.issue,
            subject: `Flat ${r.unitName}, ${r.propertyName}`,
            description: r.issue,
            status: r.status,
            createdAt: r.reportedDate.toISOString(),
            priority: r.priority,
            adminDescription: r.adminDescription,
            user: {
              name: r.userName,
              email: r.userEmail,
            },
          })),
          meta: {
            total,
            totalPages,
          },
        },
      };
    }),

  updateReportStatus: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1),
        status: z.string().min(1),
        adminDescription: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.maintenanceReport.update({
        where: { id: input.id },
        data: {
          status: input.status,
          adminDescription: input.adminDescription ?? null,
        },
      });
    }),

  deleteReport: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.maintenanceReport.delete({
        where: { id: input.id },
      });
    }),

  getAdminReadings: protectedProcedure
    .input(
      z.object({
        page: z.number().int().min(1).default(1),
        limit: z.number().int().min(1).default(7),
      })
    )
    .query(async ({ ctx, input }) => {
      const skip = (input.page - 1) * input.limit;
      const [readings, total] = await Promise.all([
        ctx.db.meterReading.findMany({
          skip,
          take: input.limit,
          orderBy: {
            loggedDate: "desc",
          },
        }),
        ctx.db.meterReading.count(),
      ]);

      const totalPages = Math.ceil(total / input.limit);

      return {
        data: {
          readings: readings.map((r) => ({
            id: r.id,
            user: {
              name: r.userName,
              email: r.userEmail,
            },
            propertyName: r.propertyName,
            unitName: r.unitName,
            type: r.type,
            value: r.value,
            loggedDate: r.loggedDate.toISOString(),
          })),
          meta: {
            total,
            totalPages,
          },
        },
      };
    }),
});
