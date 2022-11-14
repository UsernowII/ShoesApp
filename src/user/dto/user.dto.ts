import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';
import { RoleType } from './role.type';


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

    @IsNotEmpty()
    role!: RoleType; 
}