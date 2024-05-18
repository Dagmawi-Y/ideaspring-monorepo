import { RolesBuilder } from 'nest-access-control';
export declare enum Roles {
    ENTREPRENEUR = "entrepreneur",
    INVESTOR = "investor",
    ENGAGER = "engager",
    ADMIN = "admin"
}
export declare const roles: RolesBuilder;
