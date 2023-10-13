import {Controller, Post, Body, Get, Param,Put, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { ControleDeEstoqueService } from './controle_de_estoque.service';
import { CreateEstoqueDto } from './dto/estacionamento.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { UpdatePartialEstoqueDto } from './dto/update-partial-estoque.dto';

@Controller('Controle_de_Estoque')

export class ControleDeEstoqueController {
    constructor(private readonly controle_de_estoque: ControleDeEstoqueService) {}

    @Post()
   async create(@Body() data:CreateEstoqueDto){
      return this.controle_de_estoque.create(data)};
   
   

@Get()
async list(){
    return this.controle_de_estoque.list()
}


 
@Get(':id_produto')
async show(@Param('id_produto', ParseIntPipe) id_produto:number){
    return this.controle_de_estoque.show(id_produto);
}


@Put(':id_produto')
update(@Body()  data:UpdateEstoqueDto,@Param('id_produto',ParseIntPipe) id_produto:number){
    return this.controle_de_estoque.update(id_produto,data,
    );
}

@Patch(':id_produto')
async updatePartial(@Body() data:UpdatePartialEstoqueDto,@Param('id_produto', ParseIntPipe) id_produto:number){
    return this.controle_de_estoque.updatePartial(id_produto,data,
        );
}

@Delete(':id_produto')
async remove(@Param('id_produto', ParseIntPipe) id_produto:number){
    return this.controle_de_estoque.remove(id_produto);
}
}
