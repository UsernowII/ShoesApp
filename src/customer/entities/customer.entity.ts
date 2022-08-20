import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity"
import { UserEntity } from '../../user/entities/user.entity';

@Entity({name : "customers"})
export class CustomerEntity extends BaseEntity{
    
    @Column()
    address! : string;

    @Column()
    dni! : number;

    @OneToOne( ()=> UserEntity, (user) => user.customer)
    @JoinColumn({name : "user_id"})
    customer! : UserEntity 

}