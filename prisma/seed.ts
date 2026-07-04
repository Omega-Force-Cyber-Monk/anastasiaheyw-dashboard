import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const adminEmail = "admin@heywood.com";
  const adminPassword = "admin123";

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      password: adminPassword,
      role: "admin",
      name: "Admin User",
    },
    create: {
      email: adminEmail,
      password: adminPassword,
      role: "admin",
      name: "Admin User",
    },
  });

  console.log("Admin credential seeded successfully into PostgreSQL!");
  console.log("Email:", admin.email);
  console.log("Password:", admin.password);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
