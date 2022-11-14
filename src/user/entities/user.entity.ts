import { Exclude } from 'class-transformer';
import { Entity, Column, OneToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { CustomerEntity } from '../../customer/entities/customer.entity';
import { RoleType } from '../dto/role.type';


@Entity({name : "users"})
export class UserEntity extends BaseEntity{
    
    @Column()
    userName! : string;

    @Column()
    lastName! : string;

    @Column()
    email! : string;

    @Exclude()
    @Column()
    password! : string;

    @Column()
    city! : string;

    @Column()
    province! : string;

    @Column({type: "enum", enum: RoleType, nullable:false} )
    role! : RoleType;
    
    @OneToOne( ()=> CustomerEntity, (customer) => customer.user)
    customer!: CustomerEntity;

}