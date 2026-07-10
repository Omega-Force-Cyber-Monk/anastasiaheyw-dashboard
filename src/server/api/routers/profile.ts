import { z } from "zod";
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
