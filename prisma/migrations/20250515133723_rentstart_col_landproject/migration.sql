/*
  Warnings:

  - Added the required column `rentStart` to the `LandProject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LandProject" ADD COLUMN     "rentStart" TIMESTAMP(3) NOT NULL;
