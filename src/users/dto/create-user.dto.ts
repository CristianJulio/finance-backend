import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, Length, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ default: "" })
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty({ default: "" })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  secondname: string;

  @ApiProperty({ default: "" })
  @IsNotEmpty()
  @IsString()
  first_lastname: string;

  @ApiProperty({ default: "" })
  @IsNotEmpty()
  @IsString()
  second_lastname: string;

  @ApiProperty({ default: "" })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ default: "" })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({ default: "" })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ default: 0 })
  @IsNotEmpty()
  @IsNumber()
  balance: number

}