import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Group')
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  @ApiOperation({ summary: 'Create a group' })
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all groups' })
  findAll() {
    return this.groupService.listWithPopulate('subjects');
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get group by id' })
  findOne(@Param('id') id: string) {
    return this.groupService.get(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a group' })
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(id, updateGroupDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a group' })
  remove(@Param('id') id: string) {
    return this.groupService.delete(id);
  }
}
