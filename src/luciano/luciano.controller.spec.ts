import { Test, TestingModule } from '@nestjs/testing';
import { LucianoController } from './luciano.controller';

describe('LucianoController', () => {
  let controller: LucianoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LucianoController],
    }).compile();

    controller = module.get<LucianoController>(LucianoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
