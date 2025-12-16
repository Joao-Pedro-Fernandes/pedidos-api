import { Inject, Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteService } from 'src/cliente/cliente.service';
import { Pedido } from './pedido.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/cliente/cliente.entity';
import { CreatePedidoDto } from 'src/dtos/CreatePedido.dto';

@Injectable()
export class PedidoService {

    constructor (
        @InjectRepository(Pedido)
        private readonly _pedidoRepository: Repository<Pedido>,

        @InjectRepository(Cliente)
        private readonly _clienteRepository: Repository<Cliente>
    ) {}

    async create(pedidoDto: CreatePedidoDto) {
        const cliente = await this._clienteRepository.findOneBy({
            id: pedidoDto.clienteId
        });

        if (!cliente) {
            throw new NotFoundException('Cliente não encontrado.');
        }

        const pedido = this._pedidoRepository.create({
            descricao: pedidoDto.descricao,
            valor: pedidoDto.valor,
            cliente,
        })

        return this._pedidoRepository.save(pedido)
    }

    findAll() {
        return this._pedidoRepository.find({
            relations: ['cliente']
        })
    }

    async findPedidosByCliente(idCliente: number) {
        const rows = await this._pedidoRepository.query(
            `
            select p.id as pedido_id, p.descricao, p.valor, p.created_at, c.id as cliente_id, c.nome, c.email, c.ativo from pedidos p
            inner join clientes c on p."clienteId" = c.id
            where c.id = $1
            `,
            [idCliente]
        );

        return rows.map( row => ({
            id: row.pedido_id,
            descricao: row.descricao,
            valor: row.valor,
            created_at: row.created_at,
            cliente: {
                id: row.cliente_id,
                nome: row.nome,
                email: row.email,
                ativo: row.ativo
            }
        }));
    }

}
