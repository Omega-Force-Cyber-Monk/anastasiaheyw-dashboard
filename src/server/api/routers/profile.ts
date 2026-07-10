import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const profileRouter = createTRPCRouter({
  /**
   * Get the administrator profile from the AdminProfile singleton table.
   */
  getProfile: protectedProcedure.query(async ({ ctx }) => {
    try {
      const profile =
        (await ctx.db.adminProfile.findUnique({
          where: { id: "singleton" },
        })) ??
        (await ctx.db.adminProfile.create({
          data: {
            id: "singleton",
            name: "Admin User",
            email: "admin@heywood.com",
            phone: "+44 7902 734616",
            role: "Global Portfolio Administrator",
          },
        }));

      return {
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        role: profile.role,
      };
    } catch (error) {
      console.error("Error fetching admin profile:", error);

      return {
        name: "System Admin",
        email: "admin@alltheyards.com",
        phone: "+44 7902 734616",
        role: "Global Portfolio Administrator",
      };
    }
  }),

  /**
   * Update the administrator profile in the AdminProfile singleton table.
   */
  updateProfile: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        role: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const profile = await ctx.db.adminProfile.findUnique({
        where: { id: "singleton" },
      });

      if (profile) {
        return ctx.db.adminProfile.update({
          where: { id: "singleton" },
          data: {
            name: input.name,
            email: input.email,
            phone: input.phone,
            role: input.role,
          },
        });
      }

      return ctx.db.adminProfile.create({
        data: {
          id: "singleton",
          name: input.name,
          email: input.email,
          phone: input.phone,
          role: input.role,
        },
      });
    }),

  /**
   * Change user password (handles dynamic transition of mock/synced tenants to user credentials).
   */
  changePassword: protectedProcedure
    .input(
      z.object({
        currentPassword: z.string().min(1),
        newPassword: z.string().min(6, "Password must be at least 6 characters"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const email = ctx.session.user.email;
      if (!email) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "No email address associated with this session",
        });
      }

      // Find the user in the User table
      let user = await ctx.db.user.findUnique({
        where: { email: email.trim().toLowerCase() },
      });

      // If user does not exist in User table, check if they exist in ArthurTenancy
      if (!user) {
        const tenancies = await ctx.db.arthurTenancy.findMany();
        const tenancyExists = tenancies.some((t) =>
          t.email.some((e) => e.trim().toLowerCase() === email.trim().toLowerCase())
        );

        if (!tenancyExists) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Tenancy record not found for this email",
          });
        }

        // Verify current password is the default tenant password
        if (input.currentPassword !== "tenant123" && input.currentPassword !== "tanent123") {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Incorrect current password",
          });
        }

        // Create the user in the User table
        user = await ctx.db.user.create({
          data: {
            email: email.trim().toLowerCase(),
            name: ctx.session.user.name ?? "Tenant",
            password: input.newPassword,
            role: "tenant",
          },
        });

        return { success: true, message: "Password set successfully" };
      }

      // If user exists, verify current password
      if (user.password !== input.currentPassword) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Incorrect current password",
        });
      }

      // Update password
      await ctx.db.user.update({
        where: { id: user.id },
        data: {
          password: input.newPassword,
        },
      });

      return { success: true, message: "Password updated successfully" };
    }),
});

// import { z } from "zod";
// import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

// export const profileRouter = createTRPCRouter({
//   /**
//    * Get the administrator profile from the AdminProfile singleton table.
//    */
//   getProfile: protectedProcedure.query(async ({ ctx }) => {
//     try {
//       let profile = await ctx.db.adminProfile.findUnique({
//         where: { id: "singleton" },
//       });

//       if (!profile) {
//         profile = await ctx.db.adminProfile.create({
//           data: {
//             id: "singleton",
//             name: "Admin User",
//             email: "admin@heywood.com",
//             phone: "+44 7902 734616",
//             role: "Global Portfolio Administrator",
//           },
//         });
//       }

//       return {
//         name: profile.name,
//         email: profile.email,
//         phone: profile.phone,
//         role: profile.role,
//       };
//     } catch (error) {
//       console.error("Error fetching admin profile:", error);
//       return {
//         name: "System Admin",
//         email: "admin@alltheyards.com",
//         phone: "+44 7902 734616",
//         role: "Global Portfolio Administrator",
//       };
//     }
//   }),

//   /**
//    * Update the administrator profile in the AdminProfile singleton table.
//    */
//   updateProfile: protectedProcedure
//     .input(
//       z.object({
//         name: z.string().min(1),
//         email: z.string().email(),
//         phone: z.string().min(1),
//         role: z.string().min(1),
//       })
//     )
//     .mutation(async ({ ctx, input }) => {
//       let profile = await ctx.db.adminProfile.findUnique({
//         where: { id: "singleton" },
//       });

//       if (profile) {
//         return await ctx.db.adminProfile.update({
//           where: { id: "singleton" },
//           data: {
//             name: input.name,
//             email: input.email,
//             phone: input.phone,
//             role: input.role,
//           },
//         });
//       } else {
//         return await ctx.db.adminProfile.create({
//           data: {
//             id: "singleton",
//             name: input.name,
//             email: input.email,
//             phone: input.phone,
//             role: input.role,
//           },
//         });
//       }
//     }),
// });
