import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { User } from "src/auth/schemas/user.schema";
import { Blog } from "src/blogs/schemas/blog.schema";


export  class CreateCommentDto{

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly comment:string;

    @ApiProperty()
    readonly  user:User

    @ApiProperty()
    readonly  blog:Blog
}