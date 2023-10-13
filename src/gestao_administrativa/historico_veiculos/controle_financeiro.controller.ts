import {Controller, Post, Body, Get, Param,Put, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { ControleFinanceiroService } from './controle_financeiro.service';
import { CreateUsuarioFinanceiroDto } from './dto/createhistoricoveiculos.dto';
import { UpdateUsuarioFinanceiroDto } from './dto/update-usuario.financeirodto';
import { UpdatePartialUsuarioFinanceiroDto } from './dto/update-partial-historicoveiculos.dto';

@Controller('Controle_Financeiro')

export class ControleFinanceiroController {
    constructor(private readonly controle_financeiro: ControleFinanceiroService) {}

 
      @Post()
      async create(@Body() data:CreateUsuarioFinanceiroDto){
         return this.controle_financeiro.create(data)};
      
      
   
   @Get()
   async list(){
       return this.controle_financeiro.list()
   }
  
   
    
   @Get(':id')
   async show(@Param('id', ParseIntPipe) id:number){
       return this.controle_financeiro.show(id);
   }
   
   
   @Put(':id')
   update(@Body()  data:UpdateUsuarioFinanceiroDto,@Param('id',ParseIntPipe) id:number){
       return this.controle_financeiro.update(id,data,
       );
   }
   
   @Patch(':id')
   async updatePartial(@Body() data:UpdatePartialUsuarioFinanceiroDto,@Param('id', ParseIntPipe) id:number){
       return this.controle_financeiro.updatePartial(id,data,
           );
   }
   
   @Delete(':id')
   async remove(@Param('id', ParseIntPipe) id:number){
       return this.controle_financeiro.remove(id);
   }
  }