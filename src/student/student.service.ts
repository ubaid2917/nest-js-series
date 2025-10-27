import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {

    private students = [
        { id: 1, name: 'Alice', age: 20 },
        { id: 2, name: 'Bob', age: 22 },
        { id: 3, name: 'Charlie', age: 23 },

    ]

    getAllStudents() {
        return this.students
    }

    getStudentById(id: number) {
        const student = this.students.find(student => student.id === id)
        if (!student) {
            throw new NotFoundException('Student not found');
        }
        return student;
    }

    createStudent(createStudentDto: CreateStudentDto) {
        const { name, age } = createStudentDto;
        const newStudent = {
            id: this.students.length + 1,
            name,
            age,
        }
        this.students.push(newStudent);

        return newStudent;
    }

    deleteStudent(id: number) {
        const index = this.students.findIndex(student => student.id === id);
        if (index === -1) {
            throw new NotFoundException('Student not found');
        }
        const deletedStudent = this.students.splice(index, 1);
        return deletedStudent[0];
    }


} 
