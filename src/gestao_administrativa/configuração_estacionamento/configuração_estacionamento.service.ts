import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GerenciamentodeClientesDto } from './dto/GerenciamentodeClientes.dto';
import { UpdateGerenciamentodeClientesDto } from './dto/update-GerenciamentodeClientes.dto';
import { UpdatePartialGerenciamentodeClientesDto } from './dto/update-partial-GerenciamentodeClientes.dto';

@Injectable()
export class GerenciamentoDeClientesService {
  
   constructor(private prisma : PrismaService){}
   
   async create({nome,email,data_criacao}:GerenciamentodeClientesDto) {

        return this.prisma.gerenciamento_de_clientes.create({
            data:{ nome,email,data_criacao},
});
}

async list(){
  return this.prisma.gerenciamento_de_clientes.findMany({

  })

}

async show(id_cliente: number){
return this.prisma.gerenciamento_de_clientes.findUnique({
where:{id_cliente,
}

})
}

async update(id_cliente:number,{nome,email,data_criacao}:UpdateGerenciamentodeClientesDto){
return this.prisma.gerenciamento_de_clientes.update({
  data:{nome,email,data_criacao
  },
  where:{id_cliente}
});
}

async updatePartial(id_cliente:number,{nome,email,data_criacao}:UpdatePartialGerenciamentodeClientesDto){
return this.prisma.gerenciamento_de_clientes.update({
data:{nome,email,data_criacao
},
where:{id_cliente}
});

}


async remove(id_cliente: number) {
return this.prisma.gerenciamento_de_clientes.delete({where: { id_cliente }});
}
}

