import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { AppDataSource } from "./data.source";

export abstract class ConfigServer {
  constructor() {
    const nodeNameEnv = this.createPathEnv(this.nodeEnv);
    dotenv.config({
      path: nodeNameEnv,
    });
  }

  public getEnvironment(key: string): string | undefined {
    return process.env[key];
  }

  public getNumberEnv(k: string): number {
    return Number(this.getEnvironment(k));
  }

  public get nodeEnv(): string {
    //Read global variables
    return this.getEnvironment("NODE_ENV")?.trim() || "";
  }

  public createPathEnv(path: string): string {
    const arrEnv: string[] = ["env"]; // ['hola', 'mundo']=> 'hola.mundo'
    if (path.length > 0) {
      const arrPath = path.split("."); //.pro.rele => ['pro', 'rele']
      arrEnv.unshift(...arrPath);
    }
    return "." + arrEnv.join(".");
  }

  get initConnect(): Promise<DataSource> {
    return AppDataSource.initialize();
  }
}
