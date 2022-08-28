import { Response } from "express";

enum HttpStatus {
    
    OK = 200,
    CREATED = 201,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500
    
}


export class HttpResponse {

    
    Ok(res: Response, data?: any) {
        return res.status(HttpStatus.OK).json({
            status: "Success",
            statusCode: HttpStatus.OK,
            body : data
        });

    };

    Created(res: Response, data?: any) {
        return res.status(HttpStatus.CREATED).json({
            status: "Created",
            statusCode: HttpStatus.CREATED,
            body : data
        });

    };

    NotFound(res: Response, data?: any) {
        return res.status(HttpStatus.NOT_FOUND).json({
            status: "Not Found",
            statusCode: HttpStatus.NOT_FOUND,
            error: data
        });
    };

    Unauthorized(res: Response, data?: any) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
            status: "Unauthorized",
            statusCode: HttpStatus.UNAUTHORIZED,
            error: data
        });
    };

    Forbidden(res: Response, data?: any) {
        return res.status(HttpStatus.FORBIDDEN).json({
            status: "Forbidden",
            statusCode: HttpStatus.FORBIDDEN,
            error: data
        });
    };

    Error(res: Response, data?: any) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: "Internal Server Error",
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            error: data
        });
    };


}