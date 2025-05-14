/*
  Warnings:

  - Changed the type of `tag` on the `LandProject` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProjectTag" AS ENUM ('Financiando', 'Rentando', 'Cerrado');

-- AlterTable
ALTER TABLE "LandProject" DROP COLUMN "tag",
ADD COLUMN     "tag" "ProjectTag" NOT NULL;
