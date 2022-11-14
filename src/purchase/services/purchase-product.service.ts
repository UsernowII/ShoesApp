import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { PurchaseProductDTO } from "../dto/purchase-product.dto";
import { PurchaseProductEntity } from "../entities/purchases-product.entity";
import { ProductService } from "../../product/services/product.service";

export class PurchaseProductService extends BaseService<PurchaseProductEntity> {
  constructor(private readonly productService = new ProductService()) {
    super(PurchaseProductEntity);
  }

  async findAllPurchaseProducts(): Promise<PurchaseProductEntity[]> {
    return (await this.execRepository).find();
  }

  async findPurchaseProductById(
    id: string
  ): Promise<PurchaseProductEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }

  // new purchase Product
  async createPurchaseProduct(
    body: PurchaseProductDTO
  ): Promise<PurchaseProductEntity> {
    const newPP = (await this.execRepository).create(body);
    const product = await this.productService.findProductById(newPP.product.id);
    newPP.totalPrice = product!.price * newPP.quantityProduct;
    return (await this.execRepository).save(newPP);
  }

  async deletePurchaseProduct(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async updatePurchaseProduct(
    id: string,
    infoUpdate: PurchaseProductDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
