import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({ example: '1990-01-01' })
  birthDate: Date;

  @ApiProperty({ example: 'M', enum: ['M', 'F'] })
  gender: string;

  @ApiProperty({ example: '123 Main St' })
  address: string;

  @ApiProperty({ example: '123-456-7890' })
  phoneNumber: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  email: string;

  @ApiProperty({ example: 'Software Engineer' })
  jobTitle: string;

  @ApiProperty({ example: 80000 })
  salary: number;

  @ApiProperty({ example: 1, required: false })
  departmentId?: number; 
}
