/* based on tutorial here: https://medium.com/@blacksonic86/authentication-in-angular-2-958052c64492#.2ngmnc4dj
 * adapted from JSON to PHP backend
 */

 import { Injectable } from 'angular/core';
 import { HTTPService } from './HTTP.service';
 import localStorage from 'localStorage';
 import { ModulaUser } from './modula-user';
 import { Teacher } from './teacher';
 import { Student } from './student';
 import { Observable } from 'rxjs/observable';
 import 'rxjs/add/operator/share';
 import 'rxjs/add/operator/map';

export class User {
	private user:ModulaUser;

	constructor(res){
		let response = res.JSON.stringify(res);

		 if(response.status == 'teacher'){
 		 	let teacher = response.data as Teacher;
 			user = new Teacher(teacher);
 		} else if(response.status == 'Student'){
 			let student = response.data as Student;
 			user = new Student(response);
 		} else {
 			
 		}
	}

	public setModUser(user:ModulaUser):void {
		this.user = user;
	}
	public getModUser():ModulaUser {
		return this.user;
	}
	
}

 @Injectable()
 export class ModulaMemberService implements NgOnInit {
 	private sessionCurrent = false;
 	private user:User;

 	constructor(private http: HTTPService) {
 		this.loggedIn = localStorage.getItem('auth_token');
 	}

 	loginMember(eMail,password) {
 	

 		return this.http._post('/../templates/php_functions/login', {email:eMail,pw:password} )
 								.map((response:Reponse) => response.json()).map((res) => {
 						if(res.success) {
 							localStorage.setItem('token', res.token);
 							this.loggedIn = true;
 							this.user = new User(res.data);
 						}
 					
						return res.loggedIn;
 					}).catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
 	}

 	logout(){
 		localStorage.removeItem('token');
 		this.loggedIn = false;
 	}

 	isLoggedIn(){
 		return this.loggedIn;
 	}

 	getMember():Observable<User>{
 		return getModUser();

 	}

 	getMemberId():Observable<String>{
 		return getModUser().getUserId();
 	}

 	
 }

 //remember to check that all responses contain json arrays, not strings, and if needed use JSON.pars(string) conversion.