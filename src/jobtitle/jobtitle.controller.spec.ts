import { Test, TestingModule } from '@nestjs/testing';
import { JobtitleController } from './jobtitle.controller';
import { JobtitleService } from './jobtitle.service';

describe('JobtitleController', () => {
  let controller: JobtitleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobtitleController],
      providers: [JobtitleService],
    }).compile();

    controller = module.get<JobtitleController>(JobtitleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
