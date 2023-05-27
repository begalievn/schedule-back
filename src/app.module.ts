import { Module } from '@nestjs/common';
import { TeacherModule } from './modules/teacher/teacher.module';
import { GroupModule } from './modules/group/group.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { SubjectModule } from './modules/subject/subject.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DepartmentModule } from './modules/department/department.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    TeacherModule,
    GroupModule,
    ClassroomModule,
    SubjectModule,
    ScheduleModule,
    AuthModule,
    UsersModule,
    DepartmentModule,
  ],
})
export class AppModule {}
