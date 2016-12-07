/* module-performance-service */
import { Injectable } from '@angular/core';
import { ModulePerformanceService } from './module-performance.service';
import { HTTPService } from '@HTTP.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { ModulaMemberService } from './modula-member.service';
import { Module } from './module';
import { ModulePerformance } from './module-performance';
import { MODSPERFORMANCE } from './mock-modules-performance';

@Injectable()
export class ModulePerformanceService {
	
    public modulePerformanceAll:Observable<ModulePerformance[]>;
    public studentPerformanceAll:Observable<ModulePerformance[]>;

    constructor(private http:HTTPService, private memberService:ModulaMemberService){ }

    ngOnInit():void {
        this.memberService.getMember().subscribe( user =>
                { return this.http._get('/php_services/getModsPerf')
                                    .map((res:Response) => this.extractData(res)).subscribe( mods => 
                                            { this.modulePerformance = mods; },
                                                error => console.log("ngOnInit inside MP Service has failed.")).catch((error:any) 
                                        => Observable.throw(error.json().error ||   'Server error')).cache();
                }, error => console.log("Error in Module Performance Service ngOnInit."));   

    }
    
     getModsPerf(): Observable<ModulePerformance[]> {
            	return modulePerformanceAll;        
     }
	 
     getModPerformance(studentId: String, modId:String): Observable<ModulePerformance[]> {
    
                 
            if(studentId === memberService.getMemberId() && modId !== null){
                return modulePerformanceAll.then(modsPerf => modsPerf.find(mod => mod.modPerfId == modId));
                    
            } else {
                return modulePerformanceAll.then(modsPerf => modsPerf.find(mod => mod.username == studentId));
            }
     }

     getActiveModule(studentId:String): Observable<ModulePerformance>{
        return modulePerformanceAll.then(modsPerf => modfsPerf.find(mod => mod.status == 'active'));
     }

     private extractData(res: Response):Observable<ModulePerformance[]> {        
        return res.map((res:Response) =>
                    res.json().data as ModulePerformance[]);
     
     }


}

