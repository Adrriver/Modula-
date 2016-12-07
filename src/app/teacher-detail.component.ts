import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';

@Component({
    //moduleID: module.id,
	selector: 'my-teacher-detail',
	templateUrl: 'teacher-detail.component.html'
})



export class TeacherDetail implements OnInit {
	@Input()
    teacher: Teacher;

    constructor(
        private teacherService: TeacherService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
        let id = params['teacherUserId'];
        this.teacherService.getTeacher(id)
            .then(teacher => this.teacher = teacher);
    });
    }      

    goBack(): void {
        this.location.back();
    }
}
