import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UppercasePipe } from '../common/pipes/uppercase/uppercase.pipe'; 
import { AuthGuard } from '../guards/auth/auth.guard';
import { ApiKeyGuard } from '../guards/auth/api-key.guard';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Get()
  @UseGuards(AuthGuard)
  @UseGuards(ApiKeyGuard)
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }


  @Post()
  createStudent(
    @Body('name', UppercasePipe) name: string,
    @Body() createStudentDto: CreateStudentDto) {
    createStudentDto.name = name;  
    return this.studentService.createStudent(createStudentDto);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }

}
