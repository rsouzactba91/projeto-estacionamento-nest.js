import { ApiProperty } from "@nestjs/swagger"

// historico-veiculos.dto.ts
export class CreateHistoricoVeiculosDto {
    @ApiProperty({required: true})
    placa: string;

    @ApiProperty({required: true})
    data_acesso: Date | null;

    @ApiProperty({required: true})
    horario_entrada: Date;

    @ApiProperty({required: true})

    @ApiProperty({required: true})
    horario_saida: Date | null;

    @ApiProperty({required: true})
    valor_pago: number;

    @ApiProperty({required: true})
    ticket: string;
  }