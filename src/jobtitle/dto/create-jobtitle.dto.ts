import { ApiProperty } from '@nestjs/swagger';

export class CreateJobtitleDto {
  @ApiProperty({ example: 'Software Engineer' })
  name: string;

  @ApiProperty({ example: 'Engineer' })
  title: string;

  @ApiProperty({ example: 'Software Development' })
  description: string;
}
