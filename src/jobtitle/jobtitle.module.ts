import { Module } from '@nestjs/common';
import { JobtitleService } from './jobtitle.service';
import { JobtitleController } from './jobtitle.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [ PrismaModule],
  controllers: [JobtitleController],
  providers: [JobtitleService],
})
export class JobtitleModule {}
