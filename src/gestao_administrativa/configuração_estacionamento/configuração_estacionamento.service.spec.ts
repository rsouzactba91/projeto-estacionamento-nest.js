import { Test, TestingModule } from '@nestjs/testing';
import { GerenciamentoDeClientesService } from './gerenciamento_de_clientes.service';

describe('GerenciamentoDeClientesService', () => {
  let service: GerenciamentoDeClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GerenciamentoDeClientesService],
    }).compile();

    service = module.get<GerenciamentoDeClientesService>(GerenciamentoDeClientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
