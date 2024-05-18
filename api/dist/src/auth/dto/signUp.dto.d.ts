declare enum UserRole {
    Engager = "engager",
    Entrepreneur = "entrepreneur",
    Investor = "investor",
    Admin = "admin"
}
export declare class SignupDto {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role: UserRole;
    investor_type?: string;
}
export {};
