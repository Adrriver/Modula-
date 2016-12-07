import { Injectable, OnInit, Pipe } from '@angular/core';
import { HTTPService } from './HTTP.service';
import { Observable } from 'rxjs/observabe';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { Student } from './student';
import { ModulaMemberService } from './modula-member.service';
import { ModulePerformanceService } from './module-performance.service';


@Injectable()
export class StudentService implements OnInit {

	
	private req_url:String = '/..templates/php_services/getStudents';
	private students:Observable<Student[]>; // Store as observable of Student?
	

	constructor(private http:HTTPService, private mms:ModulaMemberService, 
				private modPerfService:ModulePerformanceService, private filter:Filter){ }


	ngOnInit():void {
		this.modsPerf = this.modsPerfService.getModsPerf().cache();
		this.http._get(req_url).map((res:Response)=>
	 			res.json()).subscribe(result => { result.forEach(function(x){ this.students.push(createStudent(x))}) }, 
	 				error => console.log("Error is Student Service; ngOnInit failed.")).catch((error:any)
  												=> Observable.throw(error.json().error || 'Server error'));
	 				
	}

	 getStudents(userId: String): Observable<Student[]> {        	
	 		return students;
	 }	  
    
    getStudent(id: String): Observable<Student> {
     	return this.getStudents()
     		.then(students => students.find(student => student.studentUserId === id));
     }
    
	private createStudent(student):Observable<Student[]>{
		
		let modules:Module[] = this.modsPerf.filter( mp => mp.modUserId === student.username );
		
		return new Student(student,modules);

	}



}



