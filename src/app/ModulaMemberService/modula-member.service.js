/* based on tutorial here: https://medium.com/@blacksonic86/authentication-in-angular-2-958052c64492#.2ngmnc4dj
 * adapted from JSON to PHP backend
 */
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
var core_1 = require("angular/core");
var HTTP_service_1 = require("./HTTP.service");
var localStorage_1 = require("localStorage");
var teacher_1 = require("./teacher");
var student_1 = require("./student");
var observable_1 = require("rxjs/observable");
require("rxjs/add/operator/share");
require("rxjs/add/operator/map");
var User = (function () {
    function User(res) {
        var response = res.JSON.stringify(res);
        if (response.status == 'teacher') {
            var teacher = response.data;
            user = new teacher_1.Teacher(teacher);
        }
        else if (response.status == 'Student') {
            var student = response.data;
            user = new student_1.Student(response);
        }
        else {
        }
    }
    User.prototype.setModUser = function (user) {
        this.user = user;
    };
    User.prototype.getModUser = function () {
        return this.user;
    };
    return User;
}());
exports.User = User;
var ModulaMemberService = (function () {
    function ModulaMemberService(http) {
        this.http = http;
        this.sessionCurrent = false;
        this.loggedIn = localStorage_1.default.getItem('auth_token');
    }
    ModulaMemberService.prototype.loginMember = function (eMail, password) {
        var _this = this;
        return this.http._post('/../templates/php_functions/login', { email: eMail, pw: password })
            .map(function (response) { return response.json(); }).map(function (res) {
            if (res.success) {
                localStorage_1.default.setItem('token', res.token);
                _this.loggedIn = true;
                _this.user = new User(res.data);
            }
            return res.loggedIn;
        }).catch(function (error) { return observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    ModulaMemberService.prototype.logout = function () {
        localStorage_1.default.removeItem('token');
        this.loggedIn = false;
    };
    ModulaMemberService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    ModulaMemberService.prototype.getMember = function () {
        return getModUser();
    };
    ModulaMemberService.prototype.getMemberId = function () {
        return getModUser().getUserId();
    };
    return ModulaMemberService;
}());
ModulaMemberService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [HTTP_service_1.HTTPService])
], ModulaMemberService);
exports.ModulaMemberService = ModulaMemberService;
//remember to check that all responses contain json arrays, not strings, and if needed use JSON.pars(string) conversion. 
//# sourceMappingURL=modula-member.service.js.map