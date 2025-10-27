import { Body, Controller, Delete, Get, Param, Post  } from '@nestjs/common';
import { StudentService } from './student.service'; 
import { CreateStudentDto } from './dto/create-student.dto';

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
    createStudent(@Body() createStudentDto: CreateStudentDto) {
      return this.studentService.createStudent(createStudentDto);
    }   

    @Delete(':id')
    deleteStudent(@Param('id') id: string) {
     return this.studentService.deleteStudent(Number(id));
    }

}
