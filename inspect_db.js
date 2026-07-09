import { PrismaClient } from "./generated/prisma/index.js";
const prisma = new PrismaClient();

async function main() {
  const token = await prisma.arthurToken.findUnique({
    where: { id: "singleton" },
  });
  console.log("Token in database:", token);

  const totalProperties = await prisma.arthurProperty.count();
  const totalUnits = await prisma.arthurUnit.count();
  const totalTenancies = await prisma.arthurTenancy.count();

  console.log(`\nTotals in DB:`);
  console.log(`Properties: ${totalProperties}`);
  console.log(`Units: ${totalUnits}`);
  console.log(`Tenancies: ${totalTenancies}`);

  const tenancies = await prisma.arthurTenancy.findMany();
  console.log("\nTenancies stored in DB:");
  tenancies.forEach(t => {
    console.log(`ID: ${t.id}, Tenants: ${t.tenants.join(', ')}, Emails: ${t.email.join(', ')}, Status: ${t.status}`);
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
