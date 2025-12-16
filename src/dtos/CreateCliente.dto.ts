import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from 'class-validator';

export class CreateClienteDto {
    @ApiProperty({
        example: 'João Silva',
        description: 'Nome do cliente'
    })
    @IsString()
    nome: string;

    @ApiProperty({
        example: 'joao@email.com',
        description: 'Email do cliente'
    })
    @IsEmail()
    email: string;
}