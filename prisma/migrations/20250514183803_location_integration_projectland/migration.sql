/*
  Warnings:

  - Added the required column `location` to the `LandProject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LandProject" ADD COLUMN     "location" TEXT NOT NULL;
