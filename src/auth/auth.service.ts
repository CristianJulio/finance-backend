import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcrypt';
import { IUser } from "src/shared/interfaces/user/IUser";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username)

    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...resut } = user
      return resut
    }

    return null
  }

  async login(user: IUser) {
    const payload = { username: user.username, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }

  async findMe(username: string) {
    return this.usersService.findOne(username)
  }
}