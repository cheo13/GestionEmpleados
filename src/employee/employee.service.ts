import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employee.create({ data: createEmployeeDto });
  }

  async findAll() {
    return this.prisma.employee.findMany();
  }

  async findOne(id: number) {
    const employee = await this.prisma.employee.findUnique({ where: { id } });
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.findOne(id); // Verificar si el empleado existe antes de actualizar
    return this.prisma.employee.update({ where: { id }, data: updateEmployeeDto });
  }

  async updatePartial(id: number, partialUpdateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.findOne(id); // Verificar si el empleado existe antes de actualizar
    return this.prisma.employee.update({ where: { id }, data: partialUpdateEmployeeDto });
  }

  async remove(id: number) {
    const employee = await this.findOne(id); // Verificar si el empleado existe antes de eliminar
    return this.prisma.employee.delete({ where: { id } });
  }
}
