"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var difficulty_1 = require("./difficulty");
var DifficultiesList = (function () {
    function DifficultiesList() {
        this.selectedDifficulty = null;
        this.difficulties = [
            new difficulty_1.Difficulty(1, 1),
            new difficulty_1.Difficulty(2, 2),
            new difficulty_1.Difficulty(3, 3),
            new difficulty_1.Difficulty(4, 4)
        ];
        selectedDifficulty = difficulties[0];
    }
    return DifficultiesList;
}());
DifficultiesList = __decorate([
    core_1.Component({
        selector: 'difficulties',
        templateUrl: 'difficulties.component.html'
    }),
    __metadata("design:paramtypes", [])
], DifficultiesList);
exports.DifficultiesList = DifficultiesList;
//# sourceMappingURL=difficulties-list.component.js.map