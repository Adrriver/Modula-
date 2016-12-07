/* module-detail.component.ts */

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Module } from './module';
import { ModuleService } from './module.service';

@Component({
    //moduleID: module.id,
	selector: 'module-detail',
	templateUrl: '/module-detail.component.html'
})


export class ModuleDetail implements OnInit {
	@Input()
    module: Module;

    constructor(
        private moduleService: ModuleService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
        let id = params['id'];
        let studentId = ['studentId'];
        this.moduleService.getModule(studentId,id)
            .then(module => this.module = module);
    });
    }      

   
}

