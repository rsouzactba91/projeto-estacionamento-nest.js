-- CreateTable
CREATE TABLE "controle_de_estoque" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "fornecedor" TEXT NOT NULL,
    "data_de_recebimento" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_de_validade" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "gerenciamento_de_clientes" (
    "id_cliente" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "data_criacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "gerenciamento_de_funcionarios" (
    "id_funcionario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "criado_em" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "controle_financeiro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_cliente" TEXT NOT NULL,
    "valor_recebido" INTEGER NOT NULL,
    "data_de_recebimento" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "gestao_servicos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_servico" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "datainicio" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "gerenciamento_de_clientes_email_key" ON "gerenciamento_de_clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "gerenciamento_de_funcionarios_email_key" ON "gerenciamento_de_funcionarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "gestao_servicos_nome_servico_key" ON "gestao_servicos"("nome_servico");
