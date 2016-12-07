import { Component, OnInit } from '@angular/core';

import { Student } from './student';
import { StudentService } from './student.service';
import { ModulePerformance } from './module-performance';
import { ModulePerformanceService } from './module-performance.service';
import { Module } from './module';
import { ModulaMemberService } from './modula-member.service';
import { ModulaUser } from './modula-user';

/* keep going! */
import { Router } from '@angular/router';

@Component({
	////moduleID: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html'
})

export class Dashboard implements OnInit { 
	students: Student[];
	modules: Module[];
	modulePerfs: ModulePerformance[]; 
	user: ModulaUser;
	userStatus: String;

	constructor(private memberService: ModulaMemberService,
				private modulaPerfService: ModulaPerformanceService,
				private studentService: StudentService,
				private router: Router,
				private http:HTTPService) { 


	}

	ngOnInit(): void {
		this.memberService.getMember().subscribe( user =>
			{ 	if(user.userStatus == 'teacher'){
					userStatus = 'teacher';
					this.studentService.getStudents().subscribe( students => {
						this.students = students; },
							error => console.log('Error'));
						this.user = user;
						http._get(/php_service/get)
				} else {
					userStatus = 'student';
					modules = this.memberService.getMember().subscribe( user =>
						{ this.modulaPerfService.getModsPerf().subscribe( modsPerf =>
								{ this.modulePerfs = modsPerf },
									error => console.log("Unable to retrieve student's performance records"));
									this.user = user; },
										error => console.log('Error'));

				}

			}, error => console.log("ngOnInit tasks have failed."));
		
	}

	gotoStudentDetail(student: Student): void {
		let link = ['/detail', student.studentUserId];
		this.router.navigate(link);

	}

	gotoModuleDetail(module:Module): void {
		let link = ['/modDetail', module.modId];
		this.router.navigate(link);
	}

	gotoPerformanceDetail(perf:ModulePerformance): void {
		let link = ['/perfDetail', perf.modPerfId];
		this.router.navigate(link);
	}
}