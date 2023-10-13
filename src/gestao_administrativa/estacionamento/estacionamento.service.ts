import { Delete, Injectable, ParseIntPipe } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/estacionamento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { UpdatePartialEstoqueDto } from './dto/update-partial-estoque.dto';

@Injectable()
export class ControleDeEstoqueService {
   
   constructor(private prisma : PrismaService){}
   
   async create({ nome, categoria, preco, quantidade, fornecedor, data_de_recebimento, data_de_validade}:CreateEstoqueDto) {

        return this.prisma.controle_de_estoque.create({
            data:{
               nome,
            categoria,
            preco,
           quantidade,
           fornecedor,
           data_de_recebimento,
           data_de_validade},
   });
   }

   async list(){
      return this.prisma.controle_de_estoque.findMany({

      })

   }

async show(id_produto: number){
   return this.prisma.controle_de_estoque.findUnique({
where:{id_produto,
}

   })
}

async update(id_produto:number,{nome,categoria,preco,quantidade,fornecedor,data_de_recebimento,data_de_validade}:UpdateEstoqueDto){
   return this.prisma.controle_de_estoque.update({
      data:{nome,categoria,preco,quantidade,fornecedor,data_de_recebimento,data_de_validade
      },
      where:{id_produto}
   });
}

async updatePartial(id_produto:number,{nome,categoria,preco,quantidade,fornecedor,data_de_recebimento,data_de_validade}:UpdatePartialEstoqueDto){
return this.prisma.controle_de_estoque.update({
   data:{nome,categoria,preco,quantidade,fornecedor,data_de_recebimento,data_de_validade
   },
   where:{id_produto}
});

}


async remove(id_produto: number) {
  return this.prisma.controle_de_estoque.delete({where: { id_produto }});
}
}
