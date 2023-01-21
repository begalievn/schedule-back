import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { GroupModule } from './group/group.module';
import { ClassroomModule } from './classroom/classroom.module';
import { SubjectModule } from './subject/subject.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [TeacherModule, GroupModule, ClassroomModule, SubjectModule, ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
