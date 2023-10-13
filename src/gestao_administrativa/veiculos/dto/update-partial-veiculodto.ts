import { PartialType } from '@nestjs/swagger';
import { CreateVeiculoDto} from './create-veiculo.dto';

export class UpdatePartialveiculoDto extends PartialType(CreateVeiculoDto) {}
