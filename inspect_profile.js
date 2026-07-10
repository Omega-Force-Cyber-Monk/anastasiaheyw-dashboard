import { PrismaClient } from "./generated/prisma/index.js";
const prisma = new PrismaClient();

async function main() {
  const profiles = await prisma.adminProfile.findMany();
  console.log("Admin Profiles in DB:");
  console.log(JSON.stringify(profiles, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
