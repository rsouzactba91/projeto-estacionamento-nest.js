import {Controller, Post, Body, Get, Param,Put, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { GerenciamentoDeFuncionariosService } from './veiculo.service';
import { createGerenciamentodeFuncionariosDto } from './dto/create-veiculo.dto';
import { UpdateGerenciamentodeFuncionariosDto } from './dto/update-veiculo.dto';
import { UpdatePartialGerenciamentodeFuncionariosDto } from './dto/update-partial-veiculodto';

@Controller('gerenciamento-de-funcionarios')

export class GerenciamentoDeFuncionariosController {
  
constructor(private readonly gerenciamento_de_funcionarios: GerenciamentoDeFuncionariosService) {}


@Post()
async create(@Body() data: createGerenciamentodeFuncionariosDto){
  return this.gerenciamento_de_funcionarios.create(data)};


@Get()
async list(){
   return this.gerenciamento_de_funcionarios.list()
}


@Get(':id_funcionario')
async show(@Param('id_funcionario', ParseIntPipe) id_funcionario:number){
   return this.gerenciamento_de_funcionarios.show(id_funcionario);
}


@Put(':id_funcionario')
update(@Body()  data:UpdateGerenciamentodeFuncionariosDto,@Param('id_funcionario',ParseIntPipe) id_funcionario:number){
   return this.gerenciamento_de_funcionarios.update(id_funcionario,data,
   );
}

@Patch(':id_funcionario')
async updatePartial(@Body() data:UpdatePartialGerenciamentodeFuncionariosDto,@Param('id_funcionario', ParseIntPipe) id_funcionario:number){
   return this.gerenciamento_de_funcionarios.updatePartial(id_funcionario,data,
       );
}

@Delete(':id_funcionario')
async remove(@Param('id_funcionario', ParseIntPipe) id_funcionario:number){
   return this.gerenciamento_de_funcionarios.remove(id_funcionario);
}
}
