import { Test, TestingModule } from '@nestjs/testing';
import { ControleDeEstoqueService } from './controle_de_estoque.service';

describe('ControleDeEstoqueService', () => {
  let service: ControleDeEstoqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControleDeEstoqueService],
    }).compile();

    service = module.get<ControleDeEstoqueService>(ControleDeEstoqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
