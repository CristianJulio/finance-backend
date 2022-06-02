import { CreateUserDto } from "./dto/create-user.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/database/entities";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) { }

  async getAll() {
    return await this.usersRepository.find()
  }

  async findOne(username: string) {
    return await this.usersRepository.findOne({ where: { username } })
  }

  async createUser({ password, ...createUserDto }: CreateUserDto) {
    const pass = password
    const hash = await bcrypt.hash(pass, 10);

    const user = this.usersRepository.create({ ...createUserDto, password: hash })

    await this.usersRepository.save(user)
    return user
  }

  async delete(username: string) {
    await this.usersRepository.delete({ username })
  }
}