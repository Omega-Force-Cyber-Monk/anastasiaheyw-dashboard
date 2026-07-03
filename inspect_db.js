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

  // Let's also print properties and units
  const props = await prisma.arthurProperty.findMany();
  console.log("\nProperties stored in DB:", props);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
