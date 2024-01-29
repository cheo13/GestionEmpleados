import { Test, TestingModule } from '@nestjs/testing';
import { JobtitleService } from './jobtitle.service';

describe('JobtitleService', () => {
  let service: JobtitleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobtitleService],
    }).compile();

    service = module.get<JobtitleService>(JobtitleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
