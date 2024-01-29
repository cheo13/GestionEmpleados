import { ApiProperty } from '@nestjs/swagger';

export class CreateDepartmentDto {
  @ApiProperty({ example: 'Engineering' })
  name: string;

  @ApiProperty({ example: 'Software Development' })
  description: string;

  @ApiProperty({ example: 'City A' })
  location: string;
}
