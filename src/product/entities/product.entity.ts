import { Entity, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from "../../category/entities/category.entity";
import { BaseEntity } from "../../config/base.entity";
import { PurchaseProductEntity } from "../../purchase/entities/purchases-product.entity";

@Entity({ name: "products" })
export class ProductEntity extends BaseEntity {
  @Column()
  productName!: String;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: "category_id" })
  category!: CategoryEntity;

  @OneToMany(
    () => PurchaseProductEntity,
    (purchaseProduct) => purchaseProduct.product
  )
  purchaseProduct!: PurchaseProductEntity[];
}
