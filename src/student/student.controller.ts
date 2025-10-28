import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UppercasePipe } from '../common/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from '../guards/auth/auth.guard';
import { ApiKeyGuard } from '../guards/auth/api-key.guard';
import { RolesGuard } from '../guards/roles/role.guard';
import { Roles } from '../guards/roles/roles.decorator';
import { Role } from '../guards/roles/role.enums';

@Controller('student')
// @UseGuards(AuthGuard, ApiKeyGuard, RolesGuard)   // for applying guards at controller level
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Get()
  @UseGuards(RolesGuard, AuthGuard, ApiKeyGuard)  // for applying guards at route level
  @Roles(Role.Admin)
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
