/*
  Warnings:

  - You are about to alter the column `price` on the `LandProject` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - Added the required column `content` to the `LandProject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LandProject" ADD COLUMN     "content" TEXT NOT NULL,
ALTER COLUMN "price" SET DATA TYPE INTEGER;
