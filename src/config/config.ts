import * as dotenv from "dotenv";
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export abstract class ConfigServer {
    constructor(){
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv.config({
            path : nodeNameEnv,
        });
    };

    public getEnvironment(key : string):string | undefined{
        return process.env[key];
    }

    public getNumberEnv(k : string) : number {
        return Number(this.getEnvironment(k));    
    
    }

    public get nodeEnv() :string {
        //Read global variables
        return this.getEnvironment("NODE_ENV")?.trim() || "";
    }

    public createPathEnv(path : string) : string {
        const arrEnv: string[] = ["env"]; // ['hola', 'mundo']=> 'hola.mundo'
        if(path.length > 0){
            const arrPath = path.split(".");  //.pro.rele => ['pro', 'rele']
            arrEnv.unshift(...arrPath);
        }
        return "." + arrEnv.join("."); 
    }


    public get typeORMConfing(): DataSourceOptions{
        return {
            type : "postgres",
            host: this.getEnvironment("DB_HOST"),
            port: this.getNumberEnv("DB_PORT"),
            username: this.getEnvironment("DB_USER"),
            password: this.getEnvironment("DB_PASSWORD"),
            database: this.getEnvironment("DB_NAME"),
            entities : [__dirname + "/../**/*.entity{.ts,.js}"],
            migrations : [ __dirname + "/../../migration/*{.ts,.js}"],
            synchronize: true,
            logging : true,
            namingStrategy : new SnakeNamingStrategy(),
        };
    }
}