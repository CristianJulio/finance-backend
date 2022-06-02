import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserResponseDto } from "./dto/user-response.dto";
import { UsersService } from "./users.service";

@ApiBearerAuth()
@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  getAll() {
    return this.usersService.getAll()
  }

  @Get(":username")
  findOne(@Param("username") username: string) {
    return this.usersService.findOne(username)
  }

  @Post()
  @ApiResponse({ type: UserResponseDto })
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto)
  }

  @Delete(":username")
  async delete(@Param("username") username: string) {
    await this.usersService.delete(username)
    return {
      statusCode: HttpStatus.OK,
      msg: `User with username: ${username} deleted`
    }
  }
}