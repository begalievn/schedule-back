import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Query,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchTeacherDto } from './dto/search-teacher.dto';
import { Teacher } from './model/teacher.model';
import { SearchTeacherV2Dto } from './dto/search-teacher-v2.dto';

@Controller('teacher')
@ApiTags('Teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  @ApiOperation({ summary: 'Create a teacher' })
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all teachers' })
  async findAll() {
    return this.teacherService.listWithPopulate('subjects');
  }

  @Get('search')
  @ApiOperation({ summary: 'Search teachers' })
  async searchTeachers(
    @Query() searchTeacherDto: SearchTeacherV2Dto,
  ): Promise<Teacher[]> {
    return this.teacherService.searchTeacher(searchTeacherDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find by id' })
  async findOne(@Param('id') id: string) {
    return this.teacherService.get(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update by id' })
  async update(
    @Param('id') id: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return this.teacherService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete by id' })
  async remove(@Param('id') id: string) {
    return this.teacherService.delete(id);
  }
}
