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
var student_service_1 = require("./student.service");
var modula_member_service_1 = require("./modula-member.service");
/* keep going! */
var router_1 = require("@angular/router");
var Dashboard = (function () {
    function Dashboard(memberService, modulaPerfService, studentService, router, http) {
        this.memberService = memberService;
        this.modulaPerfService = modulaPerfService;
        this.studentService = studentService;
        this.router = router;
        this.http = http;
    }
    Dashboard.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getMember().subscribe(function (user) {
            if (user.userStatus == 'teacher') {
                userStatus = 'teacher';
                _this.studentService.getStudents().subscribe(function (students) {
                    _this.students = students;
                }, function (error) { return console.log('Error'); });
                _this.user = user;
                http._get(/php_service/get);
            }
            else {
                userStatus = 'student';
                modules = _this.memberService.getMember().subscribe(function (user) {
                    _this.modulaPerfService.getModsPerf().subscribe(function (modsPerf) { _this.modulePerfs = modsPerf; }, function (error) { return console.log("Unable to retrieve student's performance records"); });
                    _this.user = user;
                }, function (error) { return console.log('Error'); });
            }
        }, function (error) { return console.log("ngOnInit tasks have failed."); });
    };
    Dashboard.prototype.gotoStudentDetail = function (student) {
        var link = ['/detail', student.studentUserId];
        this.router.navigate(link);
    };
    Dashboard.prototype.gotoModuleDetail = function (module) {
        var link = ['/modDetail', module.modId];
        this.router.navigate(link);
    };
    Dashboard.prototype.gotoPerformanceDetail = function (perf) {
        var link = ['/perfDetail', perf.modPerfId];
        this.router.navigate(link);
    };
    return Dashboard;
}());
Dashboard = __decorate([
    core_1.Component({
        ////moduleID: module.id,
        selector: 'my-dashboard',
        templateUrl: 'dashboard.component.html'
    }),
    __metadata("design:paramtypes", [modula_member_service_1.ModulaMemberService, Object, student_service_1.StudentService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, Object])
], Dashboard);
exports.Dashboard = Dashboard;
var _a;
//# sourceMappingURL=dashboard.component.js.map