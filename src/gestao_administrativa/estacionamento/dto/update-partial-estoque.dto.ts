import { PartialType } from '@nestjs/swagger';
import { CreateEstacionamentoDto } from './estacionamento.dto';

export class UpdatePartialEstacionamentoDto extends PartialType(CreateEstacionamentoDto) {}
