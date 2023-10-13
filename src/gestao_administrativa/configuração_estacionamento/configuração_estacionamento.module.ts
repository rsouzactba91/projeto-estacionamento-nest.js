import { Module } from '@nestjs/common';
import { GerenciamentoDeClientesController} from './gerenciamento_de_clientes.controller';
import { GerenciamentoDeClientesService } from './gerenciamento_de_clientes.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [GerenciamentoDeClientesController],
  providers: [GerenciamentoDeClientesService,PrismaService,PrismaModule]
})
export class GerenciamentoDeClientesModule {}
