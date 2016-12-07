import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModulaMemberService } from './modula-member.service';

@Component({
	selector: 'login',
	template: `Please wait`
})

export class Login {
	
	constructor(private modMembServ:ModulaMemberService, private router:Router){ }

		onSubmit(eMail, password){
			this.modMembServ.login(eMail,password).subscribe((result) => {
				if(result) {
					this.router.navigate(['']);
				}
		});
	} 
}