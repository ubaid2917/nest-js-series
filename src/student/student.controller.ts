import { Body, Controller, Delete, Get, Param, Post  } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

    @Get()
    getAllStudents() {
        return this.studentService.getAllStudents();
    }   

    @Get(':id')
    getStudentById(@Param('id') id:string){
      return this.studentService.getStudentById(Number(id));
    }     


    @Post()
    createStudent(@Body() body: {name: string, age: number}) {
      return this.studentService.createStudent(body.name, body.age);
    }   

    @Delete(':id')
    deleteStudent(@Param('id') id: string) {
     return this.studentService.deleteStudent(Number(id));
    }

}
