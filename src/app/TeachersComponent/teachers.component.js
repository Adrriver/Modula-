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
var teacher_service_1 = require("./teacher.service");
var router_1 = require("@angular/router");
var Teachers = (function () {
    function Teachers(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.title = 'Your Modula Teachers';
    }
    Teachers.prototype.getTeachers = function () {
        var _this = this;
        this.teacherService.getTeachers().then(function (teachers) { return _this.teachers = teachers; });
    };
    Teachers.prototype.onSelect = function (teacher) {
        this.selectedTeacher = teacher;
    };
    Teachers.prototype.ngOnInit = function () {
        this.getTeachers();
    };
    Teachers.prototype.goToDetail = function () {
        this.router.navigate(['/detail', this.selectedTeacher.teacherUserId]);
    };
    return Teachers;
}());
Teachers = __decorate([
    core_1.Component({
        //moduleID: module.id,
        selector: 'my-teachers',
        templateUrl: 'teachers.component.html',
        styleUrls: ['teachers.component.css']
    }),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], Teachers);
exports.Teachers = Teachers;
var _a;
//# sourceMappingURL=teachers.component.js.map