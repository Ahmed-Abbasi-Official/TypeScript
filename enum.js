"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    email: "aymi.coding@gmial.com",
    password: "Ahmed@12",
    role: Roles === null || Roles === void 0 ? void 0 : Roles.admin
};
