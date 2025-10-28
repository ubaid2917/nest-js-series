import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLE_KEY } from './roles.decorator';
import { Role } from './role.enums';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

        const requiredRoles = this.reflector.getAllAndOverride<string[]>(
            ROLE_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);  


        console.log('Required Roles:', requiredRoles);
        if (!requiredRoles) {
            throw new UnauthorizedException('No roles defined');
        }

        const request = context.switchToHttp().getRequest<{
            headers: Record<string, string>
        }>();

        const userRole = request.headers['role'] as Role;
        if (!requiredRoles.includes(userRole)) {
            throw new UnauthorizedException('User role not authorized');
        }
        return requiredRoles.includes(userRole);
    }
}
