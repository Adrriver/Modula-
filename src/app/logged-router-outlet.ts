import { ElementRef, DynamicComponentLoader, AttributMetaData, Directive, Attribute } from '@angular/core';
import { Router, RouterOutlet, ComponentInstruction } from '@angular/router';
import { ModulaMemberService } from './modula-member.service';

@Injectable()
export class LoggedGuard implements CanActivate {
	


constructor(private member:ModulaMemberService) { }
		

		canActivate(){
			return this.member.isLoggedIn();
		}

}