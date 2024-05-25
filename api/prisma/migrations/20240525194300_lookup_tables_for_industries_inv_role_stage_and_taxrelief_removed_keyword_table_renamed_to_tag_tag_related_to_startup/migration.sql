/*
  Warnings:

  - You are about to drop the column `industry_id` on the `InvestorCompany` table. All the data in the column will be lost.
  - You are about to drop the column `stage_id` on the `InvestorCompany` table. All the data in the column will be lost.
  - You are about to drop the column `ideal_investor_role_id` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `industry_1_id` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `industry_2_id` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `stage_id` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the column `tax_relief_id` on the `Startup` table. All the data in the column will be lost.
  - You are about to drop the `Industry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InvestorRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Keyword` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaxRelief` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `industry` to the `InvestorCompany` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stage` to the `InvestorCompany` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "InvestorCompany" DROP CONSTRAINT "InvestorCompany_industry_id_fkey";

-- DropForeignKey
ALTER TABLE "InvestorCompany" DROP CONSTRAINT "InvestorCompany_stage_id_fkey";

-- DropForeignKey
ALTER TABLE "Keyword" DROP CONSTRAINT "Keyword_investor_id_fkey";

-- DropForeignKey
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_ideal_investor_role_id_fkey";

-- DropForeignKey
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_industry_1_id_fkey";

-- DropForeignKey
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_industry_2_id_fkey";

-- DropForeignKey
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_stage_id_fkey";

-- DropForeignKey
ALTER TABLE "Startup" DROP CONSTRAINT "Startup_tax_relief_id_fkey";

-- AlterTable
ALTER TABLE "InvestorCompany" DROP COLUMN "industry_id",
DROP COLUMN "stage_id",
ADD COLUMN     "industry" TEXT NOT NULL,
ADD COLUMN     "stage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Startup" DROP COLUMN "ideal_investor_role_id",
DROP COLUMN "industry_1_id",
DROP COLUMN "industry_2_id",
DROP COLUMN "stage_id",
DROP COLUMN "tax_relief_id",
ADD COLUMN     "ideal_investor_role" TEXT,
ADD COLUMN     "industry_1" TEXT,
ADD COLUMN     "industry_2" TEXT,
ADD COLUMN     "stage" TEXT,
ADD COLUMN     "tax_relief" TEXT;

-- DropTable
DROP TABLE "Industry";

-- DropTable
DROP TABLE "InvestorRole";

-- DropTable
DROP TABLE "Keyword";

-- DropTable
DROP TABLE "Stage";

-- DropTable
DROP TABLE "TaxRelief";

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "keyword_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "investor_id" INTEGER NOT NULL,
    "startupId" INTEGER,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "Investor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
