/*
  Warnings:

  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `franquia` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "description",
DROP COLUMN "price",
DROP COLUMN "title",
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "franquia" TEXT NOT NULL,
ADD COLUMN     "imagem" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vendas" INTEGER NOT NULL DEFAULT 0;
