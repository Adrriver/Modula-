import { Component, OnInit } from '@angular/core';
import { Module } from './module';
import { ModuleService } from './module.service';
import { Router } from '@angular/router';

@Component({
	//moduleID: module.id,
	selector: 'track-modules',
	templateUrl: '/modules.component.html',
	styleUrls: [ 'modules.component.css' ]

})

export class Modules implements OnInit {
	title = 'Gametrack Modules';
	selectedModule: Module;
	modules: Module[];

	constructor(private moduleService: ModuleService, 
				private router: Router ) { }

	getModules(): void {
		this.moduleService.getModules().then(modules => this.modules = modules);
	}

	onSelect(module: Module): void {
		this.selectedModule = module;
	}

	ngOnInit(): void {
		this.getModules();
	}

	goToDetail(): void {
		this.router.navigate(['/modDetail', this.selectedModule.modId])
	}

}