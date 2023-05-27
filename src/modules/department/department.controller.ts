import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@ApiTags('Department')
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  @ApiOperation({ summary: 'List all departments' })
  async getAll() {
    return this.departmentService.list();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get department by id' })
  async getOne(@Param('id') id: string) {
    return this.departmentService.get(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a department' })
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Patch('id')
  @ApiOperation({ summary: 'Update a department' })
  async update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentService.update(id, updateDepartmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a department' })
  remove(@Param('id') id: string) {
    return this.departmentService.delete(id);
  }
}
