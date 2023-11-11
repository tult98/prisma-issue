/*
  Warnings:

  - You are about to drop the column `title` on the `Categories` table. All the data in the column will be lost.
  - Added the required column `name` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Publishers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Categories` DROP COLUMN `title`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Publishers` ADD COLUMN `name` VARCHAR(191) NOT NULL;
