import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';
import { Student } from './student';
import { Router } from '@angular/router';


@Component({
	//moduleID: module.id,
	selector: 'my-teachers',
	templateUrl: 'teachers.component.html',
	styleUrls: [ 'teachers.component.css']
})

export class Teachers implements OnInit {
	  title = 'Your Modula Teachers'
      selectedTeacher: Teacher;
      teachers: Teacher[];

      constructor(private teacherService: TeacherService,
                  private router: Router) { }

      getTeachers(): void {
        this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
      }
      
      onSelect(teacher: Teacher): void {
        this.selectedTeacher = teacher;
      }

      ngOnInit(): void {
        this.getTeachers();
      }

      goToDetail(): void {
        this.router.navigate(['/detail', this.selectedTeacher.teacherUserId])
      } 	

}