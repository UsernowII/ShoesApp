import { Entity, Column, OneToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { CustomerEntity } from '../../customer/entities/customer.entity';

@Entity({name : "users"})
export class UserEntity extends BaseEntity{
    
    @Column()
    userName! : string;

    @Column()
    lastname! : string;

    @Column()
    email! : string;

    @Column()
    password! : string;

    @Column()
    city! : string;

    @Column()
    provincy! : string;
    
    @OneToOne( ()=> CustomerEntity, (customer) => customer.user)
    customer!: CustomerEntity;

}