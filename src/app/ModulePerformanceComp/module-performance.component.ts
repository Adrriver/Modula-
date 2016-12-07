/* mod-performance */
import { Component, OnInit } from '@angular/core';
import { HTTPService } from './HTTP.service';
import { Module } from './module'; 
import { Observable } from 'rxjs/observable';
import { Map } from 'rxjs/add/operator/map'; 


@Component({
	moduleID: module.id,
	templateUrl: 'module-performance.component.html',
	selector: 'modperformance',
})

export class ModulePerformance implements OnInit {

	constructor(private http:HTTPService, 
				private modulePerformanceService:ModulePerformanceService){ }

	modPerfId:String;
	gamePlayPercentage: number; /* points corresponding to non-academic game play activities, excluding measures such as speed of module completion, etc. */
  	bonusPoints: number;
  	score: number;
  	modules: Module[];
  	selectedPerf: ModulePerformance;

  	getModulesPerf(): void{
 		this.modulePerformanceService.getModsPerf(null);

 		this.getMods();
  	}

  	getMods(){
  		this.http._get('/php_services/getModules').map((res:Response) =>
  						this.extractModules(res)).subscribe( mods => { this.modules = mods },
                  error => console.log("getMods in ModulePerformance has failed.")).catch((error:any)
  							=> Observable.throw(error.json().error || 'Server error'));
  	}

  	ngOnInit(): void {
  		this.getModules();
  	}

  	goToDetail(): void {
  		this.router.navigate(['/perfDetail', this.selectedPerf.modulePerfId])
  	}

  	private extractModules(response): Observable<Module[]>{
  		return res.map((res:Response) =>
  						res.json().data as Module[]);
  	}

}
