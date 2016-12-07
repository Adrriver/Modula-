import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from './student.service';
import { Student } from './student';

@Component({
    //moduleID: module.id,
	selector: 'my-student-detail',
	templateUrl: 'student-detail.component.html'
})



export class StudentDetail implements OnInit {
	
    student: Student;

    constructor(
        private studentService: StudentService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
        let id = params['studentUserId'];
        this.studentService.getStudent(studentUserId)
            .then(student => this.student = student);
    });
    }      

    goBack(): void {
        this.location.back();
    }
}
