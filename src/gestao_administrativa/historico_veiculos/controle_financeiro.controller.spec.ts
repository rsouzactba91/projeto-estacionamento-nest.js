import { Test, TestingModule } from '@nestjs/testing';
import { ControleFinanceiroController } from './controle_financeiro.controller';

describe('ControleFinanceiroController', () => {
  let controller: ControleFinanceiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControleFinanceiroController],
    }).compile();

    controller = module.get<ControleFinanceiroController>(ControleFinanceiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
