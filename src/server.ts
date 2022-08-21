import "reflect-metadata"

import express from "express";
import morgan from "morgan";
import cors from "cors";
import { ConfigServer } from './config/config';
import { DataSource } from "typeorm";
import { UserRouter } from "./user/user.router";

class Server extends ConfigServer {
    public app: express.Application = express();
    private port: number = this.getNumberEnv("PORT");
    
    
    constructor () {
        super();
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.dbConnect();
        this.app.use(morgan("dev"));
        this.app.use(cors());

        this.app.use("/api", this.routers())
        this.listen();
    }

    public routers(): Array< express.Router >{
        return [new UserRouter().router];
    }

    async dbConnect(): Promise<DataSource | void> {
        return this.initConnect
          .then(() => {
            console.log("Connect Success");
          })
          .catch((err) => {
            console.error(err);
          });
      }

    public listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Listening on port ${this.port}`);
        });
    }

}

new Server();