import { Module } from '@nestjs/common';
import { ControleFinanceiroController } from './controle_financeiro.controller';
import { ControleFinanceiroService } from './controle_financeiro.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({imports:[PrismaModule],
  controllers: [ControleFinanceiroController],
  providers: [ControleFinanceiroService,PrismaService]
})
export class ControleFinanceiroModule {}
