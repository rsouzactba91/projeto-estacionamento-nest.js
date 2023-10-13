import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ControleDeEstoqueModule} from './gestao_administrativa/controle_de_estoque/controle_de_estoque.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { GerenciamentoDeClientesModule } from './gestao_administrativa/gerenciamento_de_clientes/gerenciamento_de_clientes.module';
import { ControleFinanceiroModule } from './gestao_administrativa/controle_financeiro/controle_financeiro.module';
import { PrismaService } from './prisma/prisma.service';
import { GerenciamentoDeFuncionariosModule } from './gestao_administrativa/gerenciamento_de_funcionarios/gerenciamento_de_funcionarios.module';
import { GestaoDeServicosModule } from './gestao_administrativa/gestao-de-servicos/gestao-de-servicos.module';
@Module({
  imports: [PrismaModule, ConfigModule.forRoot(), ControleDeEstoqueModule, GerenciamentoDeClientesModule,GerenciamentoDeFuncionariosModule,ControleFinanceiroModule, GestaoDeServicosModule,],
  controllers: [AppController, ],
  providers: [AppService,PrismaService],
})
export class AppModule {}
