import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModulaComponent } from './app/ModulaComponent/modula.component';
import { Students } from './app/Students/students.component';
import { StudentDetail } from './app/StudentDetail/student-detail.component';
import { StudentService } from './app/Student/student.service';
import { Teachers } from './app/TeachersComponent/teachers.component';
import { Dashboard } from './app/Dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { Modules } from './app/Modules/modules.component';
import { ModuleService } from './app/ModuleService/module.service';
import { ModuleDetail } from './app/ModuleDetail/module-detail.component';
import { ModulesPerformance } from './app/ModulePerformanceComp/module-performance.component';
import { ModulePerformanceService } from './app/ModulePerformanceService/module-performance.service';
import { HttpModule } from '@angular/http';
import { Login } from './app/Login/login.component';
import { DifficultiesList } from './app/difficulties-list.component';
import { WizardFormCreator } from './app/WizardComponent/wizard.component';
import { HTTPService } from './app/HTTPService/HTTP.service';

@NgModule({
  imports: [ BrowserModule,
		  	 FormsModule,
		  	 AppRoutingModule,
		  	 HttpModule,
		  	 ReactiveFormsModule		  
		   ],
  declarations: [ 
		  ModulaComponent,
		  StudentDetail,
		  Modules,
		  ModuleDetail,
		  ModulesPerformance,
		  Login,		 				 
		  Dashboard,	  	 
	  	  Students,
	  	  StudentDetail,
	  	  StudentDashboard,
	  	  TeacherDashboard,
	  	  WizardFormCreator,
	  	  DifficultiesList
		],
  entryComponents: [ModulaComponent],
  providers: [ StudentService,
  			   ModulaMemberService,
  			   ModulePerformanceService,
  			   ModuleService,
  			   HTTPService,
  			   LoggedGuard ],		
  bootstrap:	[ ModulaComponent ]
  })
  

export class AppModule {

 }
