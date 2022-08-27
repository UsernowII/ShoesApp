import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';
import { CustomerEntity } from '../../customer/entities/customer.entity';

export class PurchaseDTO extends BaseDTO {

    @IsNotEmpty()
    status!: number;

    @IsNotEmpty()
    payment!: string;

    @IsNotEmpty()
    customer!: CustomerEntity;

}