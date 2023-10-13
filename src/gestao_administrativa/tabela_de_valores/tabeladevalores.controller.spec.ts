import { Test, TestingModule } from '@nestjs/testing';
import { GestaoDeServicosController } from './tabeladevalores.controller';

describe('GestaoDeServicosController', () => {
  let controller: GestaoDeServicosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestaoDeServicosController],
    }).compile();

    controller = module.get<GestaoDeServicosController>(GestaoDeServicosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
