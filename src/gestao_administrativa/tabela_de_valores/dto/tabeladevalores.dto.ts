import { ApiProperty } from "@nestjs/swagger";

// tabela-valores.dto.ts
export class CreateTabelaValoresDto {

  @ApiProperty({required: true})
  intervalo: string;

  @ApiProperty({required: true})
  valor: number;
}
