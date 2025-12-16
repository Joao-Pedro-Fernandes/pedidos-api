import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePedidoDto {
    @ApiProperty({
        example: "Pedido de venda",
        description: 'Descreve o que é o pedido.'
    })
    @IsString()
    descricao: string;

    @ApiProperty({
        example: 'Valor do pedido',
        description: 'O valor negociado do pedido'
    })
    @IsNumber()
    valor: number;

    @ApiProperty({
        example: '1',
        description: 'Id do cliente que fez o pedido'
    })
    @IsNumber()
    clienteId: number;
}