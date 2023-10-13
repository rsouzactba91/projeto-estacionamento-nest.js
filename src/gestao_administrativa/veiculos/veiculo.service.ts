import { Injectable } from '@nestjs/common';
import { createGerenciamentodeFuncionariosDto } from './dto/create-veiculo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePartialUsuarioFinanceiroDto } from '../controle_financeiro/dto/update-partial-usuario-financeiro.dto';
import { UpdateGerenciamentodeFuncionariosDto } from './dto/update-veiculo.dto';
import { UpdatePartialGerenciamentodeFuncionariosDto } from './dto/update-partial-veiculodto';

@Injectable()
export class GerenciamentoDeFuncionariosService {
  
constructor(private prisma : PrismaService){}
   
async create({nome,email,telefone,criado_em,atualizado_em}:createGerenciamentodeFuncionariosDto) {

    return this.prisma.gerenciamento_de_funcionarios.create({
        data:{nome,email,telefone,criado_em,atualizado_em},
});
}

async list(){
return this.prisma.gerenciamento_de_funcionarios.findMany({

})

}

async show(id_funcionario: number){
return this.prisma.gerenciamento_de_funcionarios.findUnique({
where:{id_funcionario,
}

})
}

async update(id_funcionario:number,{nome,email,telefone,criado_em,atualizado_em}:UpdateGerenciamentodeFuncionariosDto){
return this.prisma.gerenciamento_de_funcionarios.update({
data:{nome,email,telefone,criado_em,atualizado_em},
where:{id_funcionario}
});
}

async updatePartial(id_funcionario:number,{nome,email,telefone,criado_em,atualizado_em}:UpdatePartialGerenciamentodeFuncionariosDto){
return this.prisma.gerenciamento_de_funcionarios.update({
data:{nome,email,telefone,criado_em,atualizado_em},
where:{id_funcionario}
});

}


async remove(id_funcionario: number) {
return this.prisma.gerenciamento_de_funcionarios.delete({where: { id_funcionario }});
}
}



