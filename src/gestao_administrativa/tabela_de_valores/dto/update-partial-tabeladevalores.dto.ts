import { PartialType } from '@nestjs/swagger';
import { CreateTabelaValoresDto} from './tabeladevalores.dto';

export class UpdatePartialtabeladevaloresDto extends PartialType(CreateTabelaValoresDto) {}



