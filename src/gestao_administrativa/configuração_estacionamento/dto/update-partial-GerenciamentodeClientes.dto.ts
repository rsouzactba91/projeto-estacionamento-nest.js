import { PartialType } from '@nestjs/swagger';
import { CreateconfigestacionamentoDto } from './configestacionamento.dto';

export class UpdatePartialconfigestacionamentDto extends PartialType(CreateconfigestacionamentoDto) {}



