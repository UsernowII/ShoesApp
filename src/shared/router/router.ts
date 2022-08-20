import { Router } from "express";

// T=controlador    U=middleware
export class BaseRouter <T> {

    public router : Router;
    public controller : T;


    // public middleware: U

    constructor(Tcontroller : {new() : T}) {
        this.router = Router();
        this.controller = new Tcontroller();
        this.routes();
    }

    routes(){}

}