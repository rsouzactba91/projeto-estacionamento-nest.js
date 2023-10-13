import { Module } from '@nestjs/common';
import { ControleDeEstoqueController } from './controle_de_estoque.controller';
import { ControleDeEstoqueService } from './controle_de_estoque.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [ControleDeEstoqueController],
  providers: [ControleDeEstoqueService,PrismaService,PrismaModule],
  exports:[PrismaService,PrismaModule]
})
export class ControleDeEstoqueModule {}
