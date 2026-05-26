import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(body: any) {
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await this.usersService.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
    });

    return user;
  }

  async login(body: any) {
    const user = await this.usersService.findByEmail(body.email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isMatch = await bcrypt.compare(
      body.password,
      user.password,
    );

    if (!isMatch) {
      throw new UnauthorizedException('Wrong password');
    }

    const token = this.jwtService.sign({
      id: user._id,
      email: user.email,
    });

    return {
      token,
      user,
    };
  }
}