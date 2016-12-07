import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { Teacher } from './teacher';
import { ModulaMemberService } from './modula-member.service';
import { HTTPService } from './HTTP.service';


// component links to account information view
@Component({
	selector: 'my-account',
	templateUrl: 'account.component.html',	
	styleUrls: ['main.css']

})

export class Account implements OnInit {
	public user:ModulaUser;

	constructor(private http:HTTPService, private memberService:ModulaMemberService){ 
		user = memberService.getMember().getModUser();
		
	}



}