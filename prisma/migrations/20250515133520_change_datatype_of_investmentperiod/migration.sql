/*
  Warnings:

  - Changed the type of `investmentPeriod` on the `LandProject` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "LandProject" DROP COLUMN "investmentPeriod",
ADD COLUMN     "investmentPeriod" INTEGER NOT NULL;
