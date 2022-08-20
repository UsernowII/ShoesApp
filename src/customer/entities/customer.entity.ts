import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity"

@Entity({name : "customers"})
export class CustomerEntity extends BaseEntity{
    
    @Column()
    address! : string;

    @Column()
    dni! : number;

    @OneToOne()
    @JoinColumn({name : "user_id"}); 

}