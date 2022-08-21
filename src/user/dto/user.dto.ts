import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';


export class UserDTO extends BaseDTO {

    @IsNotEmpty()
    userName! : string;

    @IsNotEmpty()
    lastname! : string;

    @IsNotEmpty()
    email! : string;

    @IsNotEmpty()
    password! : string;

    @IsNotEmpty()
    city! : string;

    @IsNotEmpty()
    provincy! : string;
    
}