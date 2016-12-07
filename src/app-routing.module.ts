/* app-routing.module.ts */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulePerformance } from './module-performance.component';
import { Students } from './students.component';
import { StudentDetail } from './student-detail.component';
import { StudentDashboard } from './student-dashboard.component';
import { Teachers } from './teachers.component';
import { TeacherDashboard } from './teacher-dashboard.component';
import { Modules } from './modules.component';
import { ModuleDetail } from './module-detail.component';
import { LoggedGuard } from './logged-guard.guard';


const routes: Routes = [
		{ path: '', redirectTo: '/templates/landing.component', pathMatch: 'full', name: 'Landing'},
		{ path: 'teacher-dashboard', component: TeacherDashboard, canActivate: [LoggedGuard] },
		{ path: 'student-dashboard', component: StudentDashboard, canActivate: [LoggedGuard] },
		{ path: 'students', component: Students, canActivate: [LoggedGuard] },
		{ path: 'detail/:id', component: StudentDetail, canActivate: [LoggedGuard] },		
		{ path: 'detail/:modID', component: GameTrackDetail, canActivate: [LoggedGuard] },
		{ path: 'studentperf', component: ModulePerformance, canActivate: [LoggedGuard] },
		{ path: 'teachers', component: TeacherDetail, canActivate: [LoggedGuard] },
		{ path: 'detail/:teacherUserId', component: TeacherDetail, canActivate: [LoggedGuard] },
		{ path: 'modules', component: Modules, canActivate: [LoggedGuard] },
		{ path: 'detail/:modId', component: ModuleDetail, canActivate: [LoggedGuard] }
	];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
	})

/* future providers for guard modules go here */

export class AppRoutingModule {}