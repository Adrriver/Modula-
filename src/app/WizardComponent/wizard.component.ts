import { Component, OnInit } from '@angular/core';
import { Validator, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Wizard } from './wizard.interface';
import { ModulaMemberService } from './modula-member.service';
import { HTTPService } from './HTTP.service';

@Component({
	moduleId: module.id,
	selector: 'wizard',
	templateUrl: 'wizard.component.html'
})

export class WizardFormCreator implements OnInit {
	public wizardForm: FormGroup;
	public teacher: String;
	public date:Date;

	constructor(private fB: FormBuilder, 
		private modMember: ModulaMemberService,
		httpService:HTTPService) { 
		submitNow:Boolean = false;
		this.date = new Date();
	}

	ngOnInit(){
		this.modMember.getMember().subscribe( teacher =>
			 { this.wizardForm = this.fB.group({
				gameName: ['', [Validators.required, Validators.minLength(10)]],
				teacher: [this.teacher, [Validators.required]],
				class: ['', [Validators.required]],
				dateCreated: ['date', [Validators.required]],
				keywords: ['', [Validators.required, Validators.minLength(3)]],
				grade: ['', [Validators.required, Validators.maxLength(1)]],
				modules: this.fB.array([
						this.initModules()
					]),
				invited: ['', [Validators.required, Validators.listFormat]]				
			}); 
				this.teacher = teacher; 
			}, error => console.log("Error in Wizard Form Component; ngOnInit failed."));
				
		
	}

	initModules() {
		return this.fB.group({
			difficulty: ['', [Validators,required]],
			questionCount: ['', [Validators.required]],
			modName: ['', [Validators.required, Validators.minLength(3)]],
			questions: this.fB.array([
				this.initQuestion(),
				])
		});
	}

	addModule(){

		const contr = <FormArray>this.wizardForm.controls['modules'];
		cont.push(this.initModule());
	}

	removeModule(p:number){
		const cont = <FormArray>this.wizardForm.controls['modules'];
		cont.removeAt(p);
	}

	initQuestion(){
		return this.fB.group({
			correctAnswer: ['', [Validators.required]],
			qNum: ['', [Validators.required]],
			question: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
			A: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
			B: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
			C: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
			D: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]]

		});
	}

	addQuestion(){
		const cont = <FormArray>this.wizardForm.controls['questions'];
		cont.push(this.initQuestion());
	}

	removeQuestion(p:number){
		const cont = <FormArray>this.wizardForm.controls['questions'];
		cont.removeAt(p);
	}
	save(track:Wizard){
		//save question set
		httpService._post(track.value, '../php_functions/submit_module');
	}

	submitNowToggle(){
		submitNow = !submitNow;

	}

}

