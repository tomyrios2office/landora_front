/*
  Warnings:

  - Added the required column `minPrice` to the `LandProject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `progress` to the `LandProject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LandProject" ADD COLUMN     "minPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "progress" INTEGER NOT NULL;
