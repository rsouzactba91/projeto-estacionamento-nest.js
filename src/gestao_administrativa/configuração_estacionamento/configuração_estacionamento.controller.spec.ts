import { Test, TestingModule } from '@nestjs/testing';
import { GerenciamentoDeClientesController } from './gerenciamento_de_clientes.controller';

describe('GerenciamentoDeClientesController', () => {
  let controller: GerenciamentoDeClientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GerenciamentoDeClientesController],
    }).compile();

    controller = module.get<GerenciamentoDeClientesController>(GerenciamentoDeClientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
