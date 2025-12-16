import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { Cliente } from 'src/cliente/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido,Cliente])],
  providers: [PedidoService],
  controllers: [PedidoController]
})
export class PedidoModule {}
