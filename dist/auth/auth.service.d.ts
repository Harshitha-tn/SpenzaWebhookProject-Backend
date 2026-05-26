import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signup(body: any): Promise<import("mongoose").Document<unknown, {}, import("../users/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../users/user.schema").User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    login(body: any): Promise<{
        token: string;
        user: import("mongoose").Document<unknown, {}, import("../users/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../users/user.schema").User & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        };
    }>;
}
