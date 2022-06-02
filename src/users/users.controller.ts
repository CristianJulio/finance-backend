import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Request } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { Public } from "src/shared/decorators/isPublic";
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

  @Public()
  @Post()
  @ApiResponse({ type: UserResponseDto })
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto)
  }

  @Delete()
  async delete(@Request() req: any) {
    const username = req.user.username
    await this.usersService.delete(username)
    return {
      statusCode: HttpStatus.OK,
      msg: `User with username: ${username} deleted`
    }
  }
}