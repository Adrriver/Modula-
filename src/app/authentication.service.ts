/* Authentication Service 

import { Injectable } from 'angular/core';
import { Router } from 'angular2/router';

export class ModulaUser {
	constructor(
		public eMail: String,
		public password: String) { 

		}

var user = [
	new ModulaUser('admin@admin.com','adm0'),
	new ModulaUser('testuser@gmail.com','password')
	];
}

@Injectable()
export class AuthenticationService {
	
	constructor(
		private router: Router) { }

	logout() {
		var unauthenticatedVisitor = users.find( user => user.email === user.email);
			if(unauthenticatedVisitor && unauthenticatedVisitor.password === user.password) {
				var authenticated = unauthenticatedVisitor;
				localStorage.setItem("user", authenticated);
				this.router.navigate(['Home']);
				return true;
			}
				return false;

	}

	checkCredentials() {
		if(localStorage.getItem("user") === null) {
			this.router.navigate(['Login']);
		}
	}
}
*/