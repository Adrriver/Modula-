import { Injectable, OnInit } from '@angular/core';
import { HTTPService } from './HTTP.service';
import { Observable } from 'rxjs/observable';
import { Module } from './module';


@Injectable()
export class ModuleService implements OnInit {

public modules:Observable<Module[]>;

	constructor(private http:HTTPService){

	}

	ngOnInit():void {
		http._get('/php_services/getModues').map((res:Response) => 
        				extractModules(res)).subscribe( modules => { this.modules = modules },
        					error => console.log("Error in Module Service; ngOnInit failed.")
        					.catch((error:any) => Observable.throw(error.json().error ||   'Server error'))).cache();
	}
	 getModules(): Observable<Module[]> {
        return this.modules;
      }

     getModule(id: String, studentId: String): Observable<Module> {
     	return this.getModules()
     		.then(modules => modules.find(module => module.modId === id));
     }			/* to do: add condition that the student account in question
     			 * has at least been invited to play a track, and accepted */
    

     private extractModules(response): Observable<Module[]>{
     	return response.map((res:Response) =>
     			res.json().data as Module[]);
     		
     }

}








