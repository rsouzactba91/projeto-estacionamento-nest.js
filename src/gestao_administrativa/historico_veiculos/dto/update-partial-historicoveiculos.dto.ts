import { PartialType } from '@nestjs/swagger';
import {CreateHistoricoVeiculosDto} from './createhistoricoveiculos.dto';

export class UpdatePartialhistoricoveiculosDto extends PartialType(CreateHistoricoVeiculosDto) {}
