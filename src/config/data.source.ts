import * as dotenv from 'dotenv';

import { DataSourceOptions, DataSource } from 'typeorm';
import { SnakeNamingStrategy } from "typeorm-naming-strategies";


dotenv.config({
    path : process.env.NODE_ENV !== undefined 
        ? `.${process.env.NODE_ENV.trim()}.env` 
        : '.env',
});

const Config : DataSourceOptions = {
    type : "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities : [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations : [ __dirname + "/../migrations/*{.ts,.js}"],
    synchronize: false,
    migrationsRun : true,
    logging : true,
    namingStrategy : new SnakeNamingStrategy(),
};


export const AppDataSource = new DataSource(Config);