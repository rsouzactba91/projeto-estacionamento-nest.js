import {Controller, Post, Body, Get, Param,Put, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { GerenciamentodeClientesDto } from './dto/GerenciamentodeClientes.dto';
import { UpdateGerenciamentodeClientesDto } from './dto/update-GerenciamentodeClientes.dto';
import { UpdatePartialGerenciamentodeClientesDto } from './dto/update-partial-GerenciamentodeClientes.dto';
import { GerenciamentoDeClientesService } from './gerenciamento_de_clientes.service';


@Controller('gerenciamento_de_clientes')

export class GerenciamentoDeClientesController {
    constructor(private readonly gerenciamento_de_clientes: GerenciamentoDeClientesService) {}


    @Post()
    async create(@Body() data:GerenciamentodeClientesDto){
       return this.gerenciamento_de_clientes.create(data)};
    
    
 
 @Get()
 async list(){
     return this.gerenciamento_de_clientes.list()
 }

 
  
 @Get(':id_cliente')
 async show(@Param('id_cliente', ParseIntPipe) id_cliente:number){
     return this.gerenciamento_de_clientes.show(id_cliente);
 }
 
 
 @Put(':id_cliente')
 update(@Body()  data:UpdateGerenciamentodeClientesDto,@Param('id_cliente',ParseIntPipe) id_cliente:number){
     return this.gerenciamento_de_clientes.update(id_cliente,data,
     );
 }
 
 @Patch(':id_cliente')
 async updatePartial(@Body() data:UpdatePartialGerenciamentodeClientesDto,@Param('id_cliente', ParseIntPipe) id_cliente:number){
     return this.gerenciamento_de_clientes.updatePartial(id_cliente,data,
         );
 }
 
 @Delete(':id_cliente')
 async remove(@Param('id_cliente', ParseIntPipe) id_cliente:number){
     return this.gerenciamento_de_clientes.remove(id_cliente);
 }
}
