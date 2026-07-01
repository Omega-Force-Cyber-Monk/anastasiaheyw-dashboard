import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const profileRouter = createTRPCRouter({
  /**
   * Get the administrator profile. If not initialized, returns default values.
   */
  getProfile: publicProcedure.query(async ({ ctx }) => {
    try {
      const profile = await ctx.db.adminProfile.findUnique({
        where: { id: "singleton" },
      });
      
      if (!profile) {
        return {
          name: "System Admin",
          email: "admin@alltheyards.com",
          phone: "+44 7902 734616",
          role: "Global Portfolio Administrator",
        };
      }
      
      return profile;
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
   * Update the administrator profile in the database.
   */
  updateProfile: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        role: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.adminProfile.upsert({
        where: { id: "singleton" },
        update: {
          name: input.name,
          email: input.email,
          phone: input.phone,
          role: input.role,
        },
        create: {
          id: "singleton",
          name: input.name,
          email: input.email,
          phone: input.phone,
          role: input.role,
        },
      });
    }),
});
