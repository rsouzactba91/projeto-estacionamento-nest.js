import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsEmail,IsStrongPassword} from "class-validator";

export class CreateVeiculoDto {
  
  @ApiProperty({required: true})
  placa: string;

  @ApiProperty({required: true})
  ticket: string | null;

  @ApiProperty({required: true})
  horario_entrada: Date;

  @ApiProperty({required: true})
  horario_saida: Date | null;

  @ApiProperty({required: true})
  pagou_fracao_30_minutos: boolean;

  @ApiProperty({required: true})
  pagou_algum_periodo: boolean;
}