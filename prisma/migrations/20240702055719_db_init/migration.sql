/*
  Warnings:

  - You are about to drop the column `videoId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the `Creator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Editor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Moderator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Video` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('None', 'Editor', 'Moderator', 'Creator');

-- CreateEnum
CREATE TYPE "PlatformName" AS ENUM ('None', 'Youtube', 'Instagram', 'Twitter', 'Linkedin');

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_videoId_fkey";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "videoId",
ADD COLUMN     "staticContenttId" INTEGER,
ADD COLUMN     "videoContentId" INTEGER;

-- DropTable
DROP TABLE "Creator";

-- DropTable
DROP TABLE "Editor";

-- DropTable
DROP TABLE "Moderator";

-- DropTable
DROP TABLE "Video";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "emailaddress" TEXT NOT NULL,
    "videoContentId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserType" (
    "id" SERIAL NOT NULL,
    "type" "Role" NOT NULL DEFAULT 'None',
    "userId" INTEGER,

    CONSTRAINT "UserType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" SERIAL NOT NULL,
    "name" "PlatformName" NOT NULL DEFAULT 'None',
    "userId" INTEGER,
    "videoContentId" INTEGER,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoContent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "storeLink" TEXT NOT NULL,

    CONSTRAINT "VideoContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaticContent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "isAuth" BOOLEAN NOT NULL DEFAULT false,
    "storeLink" TEXT NOT NULL,

    CONSTRAINT "StaticContent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_videoContentId_fkey" FOREIGN KEY ("videoContentId") REFERENCES "VideoContent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserType" ADD CONSTRAINT "UserType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Platform" ADD CONSTRAINT "Platform_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Platform" ADD CONSTRAINT "Platform_videoContentId_fkey" FOREIGN KEY ("videoContentId") REFERENCES "VideoContent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_staticContenttId_fkey" FOREIGN KEY ("staticContenttId") REFERENCES "StaticContent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_videoContentId_fkey" FOREIGN KEY ("videoContentId") REFERENCES "VideoContent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
