import { Product } from "../../domain/entities/Product";
import { IProduct } from "../../domain/interfaces";
import { IProductRepository } from "../repositories/IProductRepository";

export class CreateProduct {
  constructor(private repository: IProductRepository) {}

  async execute(productModel: IProduct): Promise<string> {
    const product = new Product(productModel);

    this.repository.create(product as IProduct);

    return product.id;
  }
}
