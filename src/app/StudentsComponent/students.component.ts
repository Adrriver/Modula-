    import { Component, OnInit } from '@angular/core';
    import { Student } from './student';
    import { StudentService } from './student.service';
    import { Router } from '@angular/router';

    @Component({
      //moduleID: module.id,
      selector: 'my-students',    
      templateUrl: 'students.component.html',
      styleUrls: [ 'students.component.css' ]
    
    })

    export class Students implements OnInit {
      title = 'Your Modula Students'
      selectedStudent: Student;
      students: Student[];

      constructor(private studentService: StudentService,
                  private router: Router) { }

      getStudents(): void {
        this.studentService.getStudents().then(students => this.students = students);
      }
      
      
      onSelect(student: Student): void {
        this.selectedStudent = student;
      }

      ngOnInit(): void {
        this.getStudents();
      }

      goToDetail(): void {
        this.router.navigate(['/detail', this.selectedStudent.studentUserId])
      } 
      
    }

    