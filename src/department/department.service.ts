import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return this.prisma.department.create({ data: createDepartmentDto });
  }

  async findAll() {
    return this.prisma.department.findMany();
  }

  async findOne(id: number) {
    const department = await this.prisma.department.findUnique({ where: { id } });
    if (!department) {
      throw new NotFoundException(`Department with id ${id} not found`);
    }
    return department;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.findOne(id);
    return this.prisma.department.update({ where: { id }, data: updateDepartmentDto });
  }

  async updatePartial(id: number, partialUpdateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.findOne(id);
    return this.prisma.department.update({ where: { id }, data: partialUpdateDepartmentDto });
  }

  async remove(id: number) {
    const department = await this.findOne(id);
    return this.prisma.department.delete({ where: { id } });
  }
}
