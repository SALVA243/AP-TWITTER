/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `model` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Partage` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MotPasse` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Nom` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NomUtilisateur` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "authorId",
DROP COLUMN "content",
DROP COLUMN "id",
DROP COLUMN "published",
DROP COLUMN "title",
ADD COLUMN     "ContenuPost" VARCHAR(255),
ADD COLUMN     "IdPost" SERIAL NOT NULL,
ADD COLUMN     "ImagePost" TEXT,
ADD COLUMN     "Partage" INTEGER NOT NULL,
ADD COLUMN     "UserId" INTEGER NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("IdPost");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "DateEnreg" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Follower" VARCHAR(25),
ADD COLUMN     "Following" VARCHAR(25),
ADD COLUMN     "IdUser" SERIAL NOT NULL,
ADD COLUMN     "MotPasse" VARCHAR(25) NOT NULL,
ADD COLUMN     "Nom" VARCHAR(25) NOT NULL,
ADD COLUMN     "NomUtilisateur" VARCHAR(25) NOT NULL,
ADD COLUMN     "PhotoProfil" VARCHAR(25),
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("IdUser");

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "model";

-- CreateTable
CREATE TABLE "Like" (
    "UserIdlike" INTEGER NOT NULL,
    "PostId" INTEGER NOT NULL,
    "NombreLike" INTEGER NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("UserIdlike","PostId")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("IdUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_UserIdlike_fkey" FOREIGN KEY ("UserIdlike") REFERENCES "User"("IdUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_PostId_fkey" FOREIGN KEY ("PostId") REFERENCES "Post"("IdPost") ON DELETE RESTRICT ON UPDATE CASCADE;
