import { Teacher } from '../../teacher/model/teacher.model';

interface Subject {
  title: string;
  teachers: Teacher[];
  code: string;
}

interface Courses {
  course: number;
  subject: Subject[];
}

export class Schedule {
  day: Date;
  courses: Courses[];
}

const newClass = new Schedule();
