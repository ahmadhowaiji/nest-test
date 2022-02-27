import { Controller, Get, Post, Put, Param } from "@nestjs/common";

@Controller("students")
export class StudentController {
  @Get()
  getStudents() {
    return "All Students";
  }

  @Get("/:studentId")
  getStudentsById(@Param("studentId") sdutentId: string) {
    return "Get Student by id" + sdutentId;
  }

  @Post()
  createStudent() {
    return "Student Created";
  }

  @Put()
  updateStudent() {
    return "update student by Id";
  }
}
