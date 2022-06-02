import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @ApiProperty({ default: "" })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ default: "" })
  @IsString()
  @IsNotEmpty()
  password: string;
}