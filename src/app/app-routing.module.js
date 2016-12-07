/* app-routing.module.ts */
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
var router_1 = require("@angular/router");
var module_performance_component_1 = require("./module-performance.component");
var students_component_1 = require("./students.component");
var student_detail_component_1 = require("./student-detail.component");
var student_dashboard_component_1 = require("./student-dashboard.component");
var teacher_dashboard_component_1 = require("./teacher-dashboard.component");
var modules_component_1 = require("./modules.component");
var module_detail_component_1 = require("./module-detail.component");
var logged_guard_guard_1 = require("./logged-guard.guard");
var routes = [
    { path: '', redirectTo: '/templates/landing.component', pathMatch: 'full', name: 'Landing' },
    { path: 'teacher-dashboard', component: teacher_dashboard_component_1.TeacherDashboard, canActivate: [logged_guard_guard_1.LoggedGuard] },
    { path: 'student-dashboard', component: student_dashboard_component_1.StudentDashboard, canActivate: [logged_guard_guard_1.LoggedGuard] },
    { path: 'students', component: students_component_1.Students, canActivate: [logged_guard_guard_1.LoggedGuard] },
    { path: 'detail/:id', component: student_detail_component_1.StudentDetail, canActivate: [logged_guard_guard_1.LoggedGuard] },
    { path: 'gametracks', component: GameTracks, canActivate: [logged_guard_guard_1.LoggedGuard] },
    { path: 'detail/:trackID', component: GameTrackDetail, canActivate: [logged_guard_guard_1.LoggedGuard] },
    { path: 'studentperf', component: module_performance_component_1.ModulePerformance, canActivate: [logged_guard_guard_1.LoggedGuard] },
    { path: 'teachers', component: TeacherDetail, canActivate: [logged_guard_guard_1.LoggedGuard] },
    { path: 'detail/:teacherUserId', component: TeacherDetail, canActivate: [logged_guard_guard_1.LoggedGuard] },
    { path: 'modules', component: modules_component_1.Modules, canActivate: [logged_guard_guard_1.LoggedGuard] },
    { path: 'detail/:modId', component: module_detail_component_1.ModuleDetail, canActivate: [logged_guard_guard_1.LoggedGuard] }
];
var AppRoutingModule = (function () {
    /* future providers for guard modules go here */
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map