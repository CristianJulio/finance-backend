import { ApiProperty } from "@nestjs/swagger";

export class UserResponseDto {
  @ApiProperty({ default: "" })
  firstname: string;

  @ApiProperty({ default: "" })
  secondname: string

  @ApiProperty({ default: "" })
  first_lastname: string;

  @ApiProperty({ default: "" })
  second_lastname: string;

  @ApiProperty({ default: "" })
  email: string;

  @ApiProperty({ default: "" })
  password: string;

  @ApiProperty({ default: "" })
  username: string;

  @ApiProperty()
  balance: number;

  @ApiProperty()
  id: number;
}