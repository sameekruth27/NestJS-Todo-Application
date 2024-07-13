import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class RegisterDTO {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name : string
    
    @ApiProperty()
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email : string
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(6,20)
    password : string
}
