import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from 'src/dtos/CreateCliente.dto';

@Controller('clientes')
export class ClienteController {

    constructor(private readonly _clientesService: ClienteService) {}

    @Post()
    create(@Body() body: CreateClienteDto) {
        return this._clientesService.create(body);
    }

    @Get()
    findAll() {
        return this._clientesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this._clientesService.findOne(Number(id));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this._clientesService.remove(Number(id));
    }

}
