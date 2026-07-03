import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const properties = await prisma.arthurProperty.findMany({
    include: {
      units: {
        include: {
          tenancies: true,
        },
      },
    },
  });

  console.log("=== Arthur Properties ===");
  console.log(JSON.stringify(properties, null, 2));

  const totalProperties = await prisma.arthurProperty.count();
  const totalUnits = await prisma.arthurUnit.count();
  const totalTenancies = await prisma.arthurTenancy.count();

  console.log(`\nTotals in DB:`);
  console.log(`Properties: ${totalProperties}`);
  console.log(`Units: ${totalUnits}`);
  console.log(`Tenancies: ${totalTenancies}`);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
