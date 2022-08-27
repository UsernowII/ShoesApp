import { BaseRouter } from "../shared/router/router";
import { PurchaseProductController } from "./controllers/purchase-product.controller";


export class PurchaseProductRouter extends BaseRouter<PurchaseProductController> {
  constructor() {
    super(PurchaseProductController);
  }

  routes(): void {
    this.router.get("/purchase-product", (req, res) =>
      this.controller.getPurchaseProducts(req, res)
    );

    this.router.get("/purchase-product/:id", (req, res) =>
      this.controller.getPurchaseProductById(req, res)
    );

    this.router.post("/purchase-product", (req, res) =>
      this.controller.createPurchaseProduct(req, res)
    );

    this.router.put("/purchase-product/:id", (req, res) =>
      this.controller.updatePurchaseProduct(req, res)
    );

    this.router.delete("/purchase-product/:id", (req, res) =>
      this.controller.deletePurchaseProduct(req, res)
    );
  }
}