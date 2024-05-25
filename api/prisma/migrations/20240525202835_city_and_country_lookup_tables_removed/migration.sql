/*
  Warnings:

  - You are about to drop the column `city_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `country_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_city_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_country_id_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "city_id",
DROP COLUMN "country_id",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT;

-- DropTable
DROP TABLE "City";

-- DropTable
DROP TABLE "Country";
