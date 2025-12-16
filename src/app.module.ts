import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteService } from './cliente/cliente.service';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: "postgres",
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Jp28072002',
      database: 'pedidos_db',

      entities: ['dist/**/*entity,js'],
      migrations: ['dist/database/migrations/*.js'],

      autoLoadEntities: true,
      synchronize: false,
    }),
    ClienteModule,
    PedidoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
