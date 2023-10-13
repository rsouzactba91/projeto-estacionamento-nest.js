import { Module } from '@nestjs/common';
import { GerenciamentoDeFuncionariosController } from './veiculo.controller';
import { GerenciamentoDeFuncionariosService } from './veiculo.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({imports:[PrismaModule],
  controllers: [GerenciamentoDeFuncionariosController],
  providers: [GerenciamentoDeFuncionariosService,PrismaService,PrismaModule]
})

export class GerenciamentoDeFuncionariosModule {}
