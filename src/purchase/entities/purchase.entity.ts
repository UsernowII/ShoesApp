import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { CustomerEntity } from '../../customer/entities/customer.entity';
import { PurchaseProductEntity } from './purchases-product.entity';

import { Status } from './status';

@Entity({name : "purchases"})
export class PurchaseEntity extends BaseEntity{
    
    @Column()
    //TODO: CATEGORIZE ENUM
    status! : Status

    //TODO: REFACTOR ENUM
    @Column()
    paymentMethod! : string;
    
    @ManyToOne(()=> CustomerEntity, (customer) => customer.purchases)
    @JoinColumn({name: "customer_id"})
    customer!: CustomerEntity;

    @OneToMany(()=> PurchaseProductEntity, (purchaseProduct) => purchaseProduct.purchase)
    purchaseProduct!: PurchaseProductEntity[];

}