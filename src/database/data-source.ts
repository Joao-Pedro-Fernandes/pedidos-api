import { DataSource } from "typeorm";
import { join } from "path";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Jp28072002',
    database: 'pedidos_db',

    entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
    migrations: [join(__dirname, 'migrations', '*.{ts,js}')],

    synchronize: false,
});