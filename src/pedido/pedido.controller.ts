import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from 'src/dtos/CreatePedido.dto';

@Controller('pedido')
export class PedidoController {

    constructor (private readonly _pedidoService: PedidoService) {}


    @Post()
    create(@Body() body: CreatePedidoDto) {
        return this._pedidoService.create(body);
    }

    @Get()
    findAll() {
        return this._pedidoService.findAll(); 
    }

    @Get('by-cliente/:id')
    findPedidosByCliente(@Param('id') id: number) {
        return this._pedidoService.findPedidosByCliente(id);
    }

}
