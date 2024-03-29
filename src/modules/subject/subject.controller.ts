import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Query,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListSubjectParamsDto } from './dto/list-subject-params.dto';

@Controller('subject')
@ApiTags('Subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  @ApiOperation({ summary: 'Create a subject' })
  async create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectService.create(createSubjectDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all subjects' })
  async findAll() {
    return await this.subjectService.getAll();
  }

  @Get('filtered')
  @ApiOperation({ summary: 'Get filtered subjects' })
  async getFilteredSubjects(@Query() listSubjectParams: ListSubjectParamsDto) {
    return await this.subjectService.getFilteredSubjects(listSubjectParams);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  async findOne(@Param('id') id: string) {
    return this.subjectService.getById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a subject by id' })
  async update(
    @Param('id') id: string,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ) {
    return this.subjectService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a subject by id' })
  async remove(@Param('id') id: string) {
    return this.subjectService.delete(id);
  }
}
