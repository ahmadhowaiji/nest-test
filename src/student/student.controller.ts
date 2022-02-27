import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller("students")
export class StudentController {
  @Get()
  getStudents() {
    return "All Students";
  }

  @Get("/:studentId")
  getStudentsById() {
    return "Get Student by id";
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
