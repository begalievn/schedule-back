import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Classroom')
@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Post()
  @ApiOperation({ summary: 'Create a classroom' })
  create(@Body() createClassroomDto: CreateClassroomDto) {
    return this.classroomService.create(createClassroomDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all classrooms' })
  findAll() {
    return this.classroomService.list();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get by id' })
  findOne(@Param('id') id: string) {
    return this.classroomService.get(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a classroom' })
  update(
    @Param('id') id: string,
    @Body() updateClassroomDto: UpdateClassroomDto,
  ) {
    return this.classroomService.update(id, updateClassroomDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a classroom by id' })
  remove(@Param('id') id: string) {
    return this.classroomService.delete(id);
  }
}
