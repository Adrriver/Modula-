import { Component } from '@angular/core';
import { Difficulty } from './difficulty';

@Component({
	selector: 'difficulties',
	templateUrl: 'difficulties.component.html'
})

export class DifficultiesList {
	selectedDifficulty:Difficulty = null;

	difficulties = [
		new Difficulty(1,1),
		new Difficulty(2,2),
		new Difficulty(3,3),
		new Difficulty(4,4)
		];

	constructor(){
		selectedDifficulty = difficulties[0];
	}

}