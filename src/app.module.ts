import { Module } from '@nestjs/common';
import { TeacherModule } from './modules/teacher/teacher.module';
import { GroupModule } from './modules/group/group.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { SubjectModule } from './modules/subject/subject.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://begaliev:12345@cluster0.n4rkvdd.mongodb.net/schedule-generator?retryWrites=true&w=majority',
    ),
    TeacherModule,
    GroupModule,
    ClassroomModule,
    SubjectModule,
    ScheduleModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
