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
var core_2 = require("@angular/core");
var observable_1 = require("rxjs/observable");
var modula_member_service_1 = require("./modula-member.service");
var HTTPService = (function () {
    function HTTPService(http, memberService) {
        this.http = http;
        this.memberService = memberService;
        this.auth_token = localStorage.getItem('token');
    }
    HTTPService.prototype._post = function (url, params) {
        var headers = appendHeader(new core_2.Headers({ 'Content-Type': 'application/json' }));
        var body = JSON.stringify(params);
        var reqOptions = new core_2.RequestOptions({ headers: this.headers });
        return this.http.post(url, body, { headers: headers }).map(function (res) { return res.json(); }).catch(function (error) { return observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    HTTPService.prototype._update = function (url, params) {
        var headers = appendHeader(new core_2.Headers({ 'Content-Type': 'application/json' }));
        var body = JSON.stringify(params);
        var reqOptions = new core_2.RequestOptions({ headers: headers });
        return this.http.get(url, body, { headers: headers }).map(function (res) { return res.json(); }).catch(function (error) { return observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    HTTPService.prototype._get = function (url) {
        var headers = appendHeader(new core_2.Headers({ 'Content-Type': 'application/json' }));
        return this.http.get(url, { headers: headers }).map(function (res) { return res.json(); }).catch(function (error) { return observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    HTTPService.prototype._delete = function (url, userId) {
        return this.http.delete(url + userId).catch(function (error) { return observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    //implement authorization component!
    HTTPService.prototype.appendHeader = function (header) {
        return header.append('Authorization', 'Basic' + this.auth_token);
    };
    return HTTPService;
}());
HTTPService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_2.Http !== "undefined" && core_2.Http) === "function" && _a || Object, modula_member_service_1.ModulaMemberService])
], HTTPService);
exports.HTTPService = HTTPService;
var _a;
//# sourceMappingURL=HTTP.service.js.map