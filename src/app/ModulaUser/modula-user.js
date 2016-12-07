"use strict";
var ModulaUser = (function () {
    function ModulaUser(profile) {
        this.modulaUserId = profile.username;
        this.userFirst = profile.user_first;
        this.userLast = profile.user_last;
        this.userStatus = profile.standing;
        this.school_id = profile.school_id;
        this.eMail = profile.email;
    }
    return ModulaUser;
}());
exports.ModulaUser = ModulaUser;
//# sourceMappingURL=modula-user.js.map