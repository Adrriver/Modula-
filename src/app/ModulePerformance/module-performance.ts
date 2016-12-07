


export class ModulePerformance {

	modPerfId: string;
	studentUserId: String;
	studentName: String;
	moduleAuthor: String;
	parentTrackId: String;
	answers: number[][]; //indexed elements refer to (question#,answer#), which can be used to get needed strings from corresponding Module object */
	numQuestionsAtt: number;
	numQ: number; //number of questions for module
	numQCorrect: number;
	gamePlayPoints: number; /* (numCorrect / numQ) -> must be greater than .80 to pass level */
	bonusPoints: number; /* can add to game play points at score calculation stage */
	moduleAttempts: number;
	modulePassed: Boolean;
	dateInitialized: Date;
	dateCompleted: Date;
	
}