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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var Modula_component_1 = require("./Modula.component");
var students_component_1 = require("./students.component");
var student_detail_component_1 = require("./student-detail.component");
var student_service_1 = require("./student.service");
var dashboard_component_1 = require("./dashboard.component");
var app_routing_module_1 = require("./app-routing.module");
var modules_component_1 = require("./modules.component");
var module_service_1 = require("./module.service");
var module_detail_component_1 = require("./module-detail.component");
var module_performance_component_1 = require("./module-performance.component");
var module_performance_service_1 = require("./module-performance.service");
var http_1 = require("@angular/http");
var login_component_1 = require("./login.component");
var difficulties_list_component_1 = require("./difficulties-list.component");
var wizard_component_1 = require("./wizard.component");
var HTTP_service_1 = require("./HTTP.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            ModulaComponent,
            student_detail_component_1.StudentDetail,
            modules_component_1.Modules,
            module_detail_component_1.ModuleDetail,
            module_performance_component_1.ModulesPerformance,
            login_component_1.Login,
            dashboard_component_1.Dashboard,
            students_component_1.Students,
            student_detail_component_1.StudentDetail,
            StudentDashboard,
            TeacherDashboard,
            wizard_component_1.WizardFormCreator,
            difficulties_list_component_1.DifficultiesList
        ],
        entryComponents: [Modula_component_1.AppComponent],
        providers: [student_service_1.StudentService,
            ModulaMemberService,
            module_performance_service_1.ModulePerformanceService,
            module_service_1.ModuleService,
            HTTP_service_1.HTTPService,
            LoggedGuard],
        bootstrap: [Modula_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=Modula.module.js.map