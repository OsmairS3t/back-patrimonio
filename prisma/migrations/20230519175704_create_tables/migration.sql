-- CreateTable
CREATE TABLE "ativos" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "aquisicao" TIMESTAMP(3),
    "valor_aquisicao" DOUBLE PRECISION,
    "valor_atual" DOUBLE PRECISION,
    "depreciacao" INTEGER,
    "codsubgrupo" INTEGER NOT NULL,
    "codcentrocusto" INTEGER NOT NULL,
    "codmarca" INTEGER NOT NULL,

    CONSTRAINT "ativos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marcas" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "marcas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "centro_custo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "centro_custo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grupos" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "grupos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subgrupos" (
    "id" SERIAL NOT NULL,
    "codgrupo" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "subgrupos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locais" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "filial" TEXT NOT NULL,

    CONSTRAINT "locais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "motivos" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "explicacao" TEXT NOT NULL,

    CONSTRAINT "motivos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ativos_codigo_key" ON "ativos"("codigo");

-- AddForeignKey
ALTER TABLE "ativos" ADD CONSTRAINT "ativos_codmarca_fkey" FOREIGN KEY ("codmarca") REFERENCES "marcas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ativos" ADD CONSTRAINT "ativos_codsubgrupo_fkey" FOREIGN KEY ("codsubgrupo") REFERENCES "subgrupos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ativos" ADD CONSTRAINT "ativos_codcentrocusto_fkey" FOREIGN KEY ("codcentrocusto") REFERENCES "centro_custo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subgrupos" ADD CONSTRAINT "subgrupos_codgrupo_fkey" FOREIGN KEY ("codgrupo") REFERENCES "grupos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
