/*
  Warnings:

  - You are about to alter the column `minPrice` on the `LandProject` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "LandProject" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "minPrice" SET DATA TYPE DOUBLE PRECISION;
