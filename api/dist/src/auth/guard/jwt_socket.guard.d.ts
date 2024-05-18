import { ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
declare const JwtSocketGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtSocketGuard extends JwtSocketGuard_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export {};
