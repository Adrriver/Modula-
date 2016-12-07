"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modula_member_service_1 = require("./modula-member.service");
var LoggedRouterOutlet = (function (_super) {
    __extends(LoggedRouterOutlet, _super);
    function LoggedRouterOutlet(elemRef, loader, parentRouter, nameAttrib, memberServ) {
        var _this = _super.call(this, elementRef, loader, parentRouter, nameAttrib) || this;
        _this.memberServ = memberServ;
        _this.router = parentRouter;
        _this.publicRoutes = ['', 'login', 'signup'];
        return _this;
    }
    LoggedRouterOutlet.prototype.activate = function (instruction) {
        if (this.canActivate(instruction.urlPath)) {
            return _super.prototype.activate.call(this, instruction);
        }
        this.router.navigate(['login']);
    };
    LoggedRouterOutlet.prototype.canActivate = function (url) {
        return this.publicRoutes.indexOf(url) !== -1 || this.membServ.isLoggedIn();
    };
    return LoggedRouterOutlet;
}(router_1.RouterOutlet));
LoggedRouterOutlet = __decorate([
    core_1.Directive({
        selector: 'router-outlet'
    }),
    __param(3, core_1.Attribute('name')),
    __metadata("design:paramtypes", [core_1.ElementRef, typeof (_a = typeof core_1.DynamicComponentLoader !== "undefined" && core_1.DynamicComponentLoader) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, String, modula_member_service_1.ModulaMemberService])
], LoggedRouterOutlet);
exports.LoggedRouterOutlet = LoggedRouterOutlet;
var _a, _b;
//# sourceMappingURL=logged-guard.guard.js.map