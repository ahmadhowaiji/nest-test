import { Controller, Get, Put } from "@nestjs/common";

@Controller("teachers/:teacherId/students")
export class StudentTeacherController {
  @Get()
  getStudents() {
    return "teacherStudents";
  }

  @Put("/:studentId")
  updateStudentTeacher() {
    return "update student teacher";
  }
}
