// jobtitle.controller.ts
import { Controller, Get, Post, Body, Param, Put, Patch, Delete } from '@nestjs/common';
import { CreateJobtitleDto } from './dto/create-jobtitle.dto';
import { UpdateJobtitleDto } from './dto/update-jobtitle.dto';
import { JobtitleService } from './jobtitle.service';

@Controller('jobtitles')
export class JobtitleController {
  constructor(private readonly jobtitleService: JobtitleService) {}

  @Post()
  create(@Body() createJobtitleDto: CreateJobtitleDto) {
    return this.jobtitleService.create(createJobtitleDto);
  }

  @Get()
  findAll() {
    return this.jobtitleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobtitleService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateJobtitleDto: UpdateJobtitleDto) {
    return this.jobtitleService.update(+id, updateJobtitleDto);
  }

  @Patch(':id')
  updatePartial(@Param('id') id: string, @Body() partialUpdateJobtitleDto: UpdateJobtitleDto) {
    return this.jobtitleService.updatePartial(+id, partialUpdateJobtitleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobtitleService.remove(+id);
  }
}
