import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'Titulo da publicação',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Conteúdo  da publicação',
  })
  @IsString()
  @IsOptional()
  content: string;

  @ApiProperty({
    description: 'Email do author da publicação',
  })
  @IsNotEmpty()
  @IsEmail()
  authorEmail: string;
}
