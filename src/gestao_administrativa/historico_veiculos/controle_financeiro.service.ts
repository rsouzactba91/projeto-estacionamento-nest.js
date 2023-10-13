import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioFinanceiroDto } from './dto/createhistoricoveiculos.dto';
import { UpdateUsuarioFinanceiroDto } from './dto/update-usuario.financeirodto';
import { UpdatePartialUsuarioFinanceiroDto } from './dto/update-partial-historicoveiculos.dto';

@Injectable()
export class ControleFinanceiroService {

    constructor(private prisma : PrismaService){}
   
 async create({nome_cliente,valor_recebido,data_de_recebimento}:CreateUsuarioFinanceiroDto) {

    return this.prisma.controle_financeiro.create({
        data:{nome_cliente,valor_recebido,data_de_recebimento},
});
}

async list(){
return this.prisma.controle_financeiro.findMany({

})

}

async show(id: number){
return this.prisma.controle_financeiro.findUnique({
where:{id,
}

})
}

async update(id:number,{nome_cliente,valor_recebido,data_de_recebimento}:UpdateUsuarioFinanceiroDto){
return this.prisma.controle_financeiro.update({
data:{nome_cliente,valor_recebido,data_de_recebimento
},
where:{id}
});
}

async updatePartial(id:number,{nome_cliente,valor_recebido,data_de_recebimento}:UpdatePartialUsuarioFinanceiroDto){
return this.prisma.controle_financeiro.update({
data:{nome_cliente,valor_recebido,data_de_recebimento
},
where:{id}
});

}


async remove(id: number) {
return this.prisma.controle_financeiro.delete({where: { id }});
}
}


