import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('teacher')
@ApiTags('Teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  @ApiOperation({ summary: 'Create a teacher' })
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all teachers' })
  findAll() {
    return this.teacherService.listWithPopulate('subjects');
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find by id' })
  findOne(@Param('id') id: string) {
    return this.teacherService.get(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update by id' })
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete by id' })
  remove(@Param('id') id: string) {
    return this.teacherService.delete(id);
  }
}
