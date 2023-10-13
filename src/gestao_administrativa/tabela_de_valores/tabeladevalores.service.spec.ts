import { Test, TestingModule } from '@nestjs/testing';
import { GestaoDeServicosService } from './tabeladevalores.service';

describe('GestaoDeServicosService', () => {
  let service: GestaoDeServicosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestaoDeServicosService],
    }).compile();

    service = module.get<GestaoDeServicosService>(GestaoDeServicosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
