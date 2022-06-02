import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./local-auth.guard";
import { LoginDto } from "./dto/login.dto";
import { Public } from "src/shared/decorators/isPublic";

@ApiBearerAuth()
@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }

  @Public()
  @ApiBody({ type: LoginDto })
  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @Get("me")
  findMe(@Request() req: any) {
    return this.authService.findMe(req.user.username)
  }
}