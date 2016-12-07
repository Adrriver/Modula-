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
var HTTP_service_1 = require("./HTTP.service");
var observable_1 = require("rxjs/observable");
var ModuleService = (function () {
    function ModuleService(http) {
        this.http = http;
    }
    ModuleService.prototype.ngOnInit = function () {
        var _this = this;
        http._get('/php_services/getModues').map(function (res) {
            return extractModules(res);
        }).subscribe(function (modules) { _this.modules = modules; }, function (error) { return console.log("Error in Module Service; ngOnInit failed.")
            .catch(function (error) { return observable_1.Observable.throw(error.json().error || 'Server error'); }); }).cache();
    };
    ModuleService.prototype.getModules = function () {
        return this.modules;
    };
    ModuleService.prototype.getModule = function (id, studentId) {
        return this.getModules()
            .then(function (modules) { return modules.find(function (module) { return module.modId === id; }); });
    }; /* to do: add condition that the student account in question
                * has at least been invited to play a track, and accepted */
    ModuleService.prototype.extractModules = function (response) {
        return response.map(function (res) {
            return res.json().data;
        });
    };
    return ModuleService;
}());
ModuleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [HTTP_service_1.HTTPService])
], ModuleService);
exports.ModuleService = ModuleService;
//# sourceMappingURL=module.service.js.map