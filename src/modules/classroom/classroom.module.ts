import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomController } from './classroom.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Classroom, ClassroomSchema } from './model/classroom.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Classroom.name, schema: ClassroomSchema },
    ]),
  ],
  controllers: [ClassroomController],
  providers: [ClassroomService],
})
export class ClassroomModule {}
