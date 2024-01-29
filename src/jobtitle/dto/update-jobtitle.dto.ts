import { PartialType } from '@nestjs/swagger';
import { CreateJobtitleDto } from './create-jobtitle.dto';

export class UpdateJobtitleDto extends PartialType(CreateJobtitleDto) {}
