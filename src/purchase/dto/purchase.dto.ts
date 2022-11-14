import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';
import { CustomerEntity } from '../../customer/entities/customer.entity';
import { PurchaseStatus } from '../entities/status';

export class PurchaseDTO extends BaseDTO {

    @IsNotEmpty()
    status!: PurchaseStatus;

    @IsNotEmpty()
    payment!: string;

    @IsNotEmpty()
    customer!: CustomerEntity;

}