import { Test, TestingModule } from '@nestjs/testing';
import { ControleFinanceiroService } from './controle_financeiro.service';

describe('ControleFinanceiroService', () => {
  let service: ControleFinanceiroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControleFinanceiroService],
    }).compile();

    service = module.get<ControleFinanceiroService>(ControleFinanceiroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
