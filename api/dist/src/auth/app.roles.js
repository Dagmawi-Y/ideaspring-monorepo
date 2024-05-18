"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = exports.Roles = void 0;
const nest_access_control_1 = require("nest-access-control");
var Roles;
(function (Roles) {
    Roles["ENTREPRENEUR"] = "entrepreneur";
    Roles["INVESTOR"] = "investor";
    Roles["ENGAGER"] = "engager";
    Roles["ADMIN"] = "admin";
})(Roles || (exports.Roles = Roles = {}));
exports.roles = new nest_access_control_1.RolesBuilder();
exports.roles
    .grant(Roles.ENTREPRENEUR)
    .createOwn('pitch')
    .readAny('pitch')
    .updateOwn('pitch')
    .deleteOwn('pitch')
    .grant(Roles.INVESTOR)
    .extend(Roles.ENTREPRENEUR)
    .readAny('startup')
    .createOwn('interest')
    .updateOwn('interest')
    .deleteOwn('interest')
    .grant(Roles.ENGAGER)
    .extend(Roles.ENTREPRENEUR)
    .readAny('pitch')
    .createOwn('comment')
    .updateOwn('comment')
    .deleteOwn('comment')
    .grant(Roles.ADMIN)
    .extend([Roles.ENTREPRENEUR, Roles.INVESTOR, Roles.ENGAGER])
    .updateAny('pitch')
    .updateAny('startup')
    .updateAny('interest')
    .updateAny('comment')
    .deleteAny('pitch')
    .deleteAny('startup')
    .deleteAny('interest')
    .deleteAny('comment');
//# sourceMappingURL=app.roles.js.map