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
var common_1 = require("@angular/common");
var teacher_1 = require("./teacher");
var teacher_service_1 = require("./teacher.service");
var TeacherDetail = (function () {
    function TeacherDetail(teacherService, route, location) {
        this.teacherService = teacherService;
        this.route = route;
        this.location = location;
    }
    TeacherDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['teacherUserId'];
            _this.teacherService.getTeacher(id)
                .then(function (teacher) { return _this.teacher = teacher; });
        });
    };
    TeacherDetail.prototype.goBack = function () {
        this.location.back();
    };
    return TeacherDetail;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", teacher_1.Teacher)
], TeacherDetail.prototype, "teacher", void 0);
TeacherDetail = __decorate([
    core_1.Component({
        //moduleID: module.id,
        selector: 'my-teacher-detail',
        templateUrl: 'teacher-detail.component.html'
    }),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService, typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, common_1.Location])
], TeacherDetail);
exports.TeacherDetail = TeacherDetail;
var _a;
//# sourceMappingURL=teacher-detail.component.js.map