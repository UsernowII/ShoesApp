import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ProductEntity } from '../../product/entities/product.entity';


@Entity({name : "categories"})
export class CategoryEntity extends BaseEntity{
    
    @Column()
    categoryName! : String;
    
    @OneToMany( ()=> ProductEntity, (product) => product.category)
    products!: ProductEntity[];

}