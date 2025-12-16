import { Cliente } from "../cliente/cliente.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pedidos')
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @Column('decimal', {precision: 10, scale: 2})
    valor: number;

    @ManyToOne(() => Cliente, cliente => cliente.pedidos, {
        onDelete: 'CASCADE'
    })
    cliente: Cliente;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;


}