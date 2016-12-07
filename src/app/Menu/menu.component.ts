import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './teacher';
import { StudentService } from './student.service';


@Component({
	//moduleID: module.id,
	templateUrl: 'menu.component.html',
	selector: 'menu-side'
})

export class Menu implements OnInit { 
	username : String;
	public links: Link[] = [];

	constructor(private studentService: LinkService,
			    private modulePerformanceService: ModulePerformanceService,
				private router: Router) { 
				//serve side menu

	}

	ngOnInit(): void {
		this.linkService.getLinks(userId)
			.then(links => this.links = links);
	}

	
}





