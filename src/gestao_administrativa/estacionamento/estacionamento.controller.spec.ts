import { Test, TestingModule } from '@nestjs/testing';
import { ControleDeEstoqueController } from './controle_de_estoque.controller';

describe('ControleDeEstoqueController', () => {
  let controller: ControleDeEstoqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControleDeEstoqueController],
    }).compile();

    controller = module.get<ControleDeEstoqueController>(ControleDeEstoqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
