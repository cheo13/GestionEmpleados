// jobtitle.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobtitleDto } from './dto/create-jobtitle.dto';
import { UpdateJobtitleDto } from './dto/update-jobtitle.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobtitleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createJobtitleDto: CreateJobtitleDto) {
    return this.prisma.jobTitle.create({ data: createJobtitleDto });
  }

  async findAll() {
    return this.prisma.jobTitle.findMany();
  }

  async findOne(id: number) {
    const jobTitle = await this.prisma.jobTitle.findUnique({ where: { id } });
    if (!jobTitle) {
      throw new NotFoundException(`JobTitle with id ${id} not found`);
    }
    return jobTitle;
  }

  async update(id: number, updateJobtitleDto: UpdateJobtitleDto) {
    const jobTitle = await this.findOne(id);
    return this.prisma.jobTitle.update({ where: { id }, data: updateJobtitleDto });
  }

  async updatePartial(id: number, partialUpdateJobtitleDto: UpdateJobtitleDto) {
    const jobTitle = await this.findOne(id);
    return this.prisma.jobTitle.update({ where: { id }, data: partialUpdateJobtitleDto });
  }

  async remove(id: number) {
    const jobTitle = await this.findOne(id);
    return this.prisma.jobTitle.delete({ where: { id } });
  }
}
