import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModulaComponent } from './src/app/ModulaComponent/modula.component';
import { Students } from './src/app/Students/students.component';
import { StudentDetail } from './src/app/StudentDetail/student-detail.component';
import { StudentService } from './src/app/Student/student.service';
import { Teachers } from './src/app/TeachersComponent/teachers.component';
import { Dashboard } from './src/app/Dashboard/dashboard.component';
import { AppRoutingModule } from './src/app/app-routing.module';
import { Modules } from './src/app/Modules/modules.component';
import { ModuleService } from './src/app/ModuleService/module.service';
import { ModuleDetail } from './src/app/ModuleDetail/module-detail.component';
import { ModulesPerformance } from './src/app/ModulePerformanceComp/module-performance.component';
import { ModulePerformanceService } from './src/app/ModulePerformanceService/module-performance.service';
import { HttpModule } from '@angular/http';
import { Login } from './src/app/Login/login.component';
import { DifficultiesList } from './src/app/difficulties-list.component';
import { WizardFormCreator } from './src/app/WizardComponent/wizard.component';
import { HTTPService } from './src/app/HTTPService/HTTP.service';

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
