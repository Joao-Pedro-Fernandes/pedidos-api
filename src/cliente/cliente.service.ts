import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private readonly _clienteRepository: Repository<Cliente>,
    ) {}

    create(data: Partial<Cliente>) {
        return this._clienteRepository.save(data);
    }

    findAll() {
        return this._clienteRepository.find();
    }

    findOne(id: number) {
        return this._clienteRepository.findOneBy({id});
    }

    async remove(id: number) {
        await this._clienteRepository.delete(id);
    }

}
