import { ElementRef, DynamicComponentLoader, AttributMetaData, Directive, Attribute } from '@angular/core';
import { Router, RouterOutlet, ComponentInstruction } from '@angular/router';
import { ModulaMemberService } from './modula-member.service';

@Directive({
	selector: 'router-outlet'
})

export class LoggedRouterOutlet extends RouterOutlet {
	publicRoutes: Array;
	private parentRouter: Router;
	private memberServ:ModulaMemberService;


constructor(
	elemRef: ElementRef, loader:DynamicComponentLoader, parentRouter:Router, 
		@Attribute('name') nameAttrib: String, private memberServ:ModulaMemberService) {
			super(elementRef, loader, parentRouter, nameAttrib);

			this.router = parentRouter;
			this.publicRoutes = ['', 'login', 'signup'];
		}

		activate(instruction: ComponentInstruction){
			if(this.canActivate(instruction.urlPath)){
				return super.activate(instruction);
			}

			this.router.navigate(['login']);
		}

		canActivate(url) {
			return this.publicRoutes.indexOf(url) !== -1 || this.membServ.isLoggedIn();
		}

}