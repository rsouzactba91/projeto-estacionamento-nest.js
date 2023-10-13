import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNumberString, IsString, Min, MinLength, isInt, isNumber, minDate } from "class-validator";

// estacionamento.dto.ts
export class CreateconfigestacionamentoDto {
  
  @ApiProperty({required: true})

    capacidade: number;

    @ApiProperty({required: true})
    senha: string | null;
  }
  
 
   