import { Injectable } from '@nestjs/common';
import { gestaodeservicosDto } from './dto/tabeladevalores.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdategestaodeservicosDto } from './dto/update-tabeladevalores.dto';
import { UpdatePartialgestaodeservicosDto } from './dto/update-partial-tabeladevalores.dto';

@Injectable()
export class GestaoDeServicosService {

    constructor(private prisma: PrismaService){}


    async create({nome_servico,descricao,status,datainicio}:gestaodeservicosDto) {

    return this.prisma.gestao_servicos.create({
        data:{nome_servico,descricao,status,datainicio},
});
}

async list(){
return this.prisma.gestao_servicos.findMany({

})

}

async show(id: number){
return this.prisma.gestao_servicos.findUnique({
where:{id,
}

});
}

async update(id:number,{nome_servico,descricao,status,datainicio}:UpdategestaodeservicosDto){
return this.prisma.gestao_servicos.update({
data:{nome_servico,descricao,status,datainicio},
where:{id}
});
}

async updatePartial(id:number,{nome_servico,descricao,status,datainicio}:UpdatePartialgestaodeservicosDto){
return this.prisma.gestao_servicos.update({
data:{nome_servico,descricao,status,datainicio},
where:{id}
});

}


async remove(id: number) {
return this.prisma.gestao_servicos.delete({where: { id }});
}
}



