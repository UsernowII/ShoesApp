import { IsNotEmpty } from 'class-validator';
import { CategoryEntity } from '../../category/entities/category.entity';
import { BaseDTO } from '../../config/base.dto';
import { RoleType } from '../../user/dto/role.type';


export class ProductDTO extends BaseDTO {

    @IsNotEmpty()
    productName!: string;

    @IsNotEmpty()
    description!: string;

    @IsNotEmpty()
    price!: number;

    @IsNotEmpty()
    category! : CategoryEntity
}