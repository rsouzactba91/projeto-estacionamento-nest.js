import { Module } from '@nestjs/common';
import { GestaoDeServicosService } from './tabeladevalores.service';
import { GestaoDeServicosController } from './tabeladevalores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({imports:[PrismaModule],
    providers: [GestaoDeServicosService, PrismaService],
  controllers: [GestaoDeServicosController],
})

export class GestaoDeServicosModule {}
