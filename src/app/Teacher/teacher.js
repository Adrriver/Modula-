"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var modula_user_1 = require("./modula-user");
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(profile) {
        var _this = _super.call(this, profile) || this;
        studentList = null;
        registrationDate = null; /* implement soon! */
        numStudents = profile[0][0][0];
        return _this;
    }
    return Teacher;
}(modula_user_1.ModulaUser));
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.js.map