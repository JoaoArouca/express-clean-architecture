import { IProduct } from "../interfaces";
import { productSchema } from "../schemas";

class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    name,
    description,
    price,
    quantity,
    category,
    createdAt,
    updatedAt,
  }: IProduct) {
    const parsedProduct = productSchema.parse({
      id,
      name,
      description,
      price,
      quantity,
      category,
      createdAt,
      updatedAt,
    });
    this.id = parsedProduct.id;
    this.name = parsedProduct.name;
    this.description = parsedProduct.description;
    this.price = parsedProduct.price;
    this.quantity = parsedProduct.quantity;
    this.category = parsedProduct.category;
    this.createdAt = parsedProduct.createdAt;
    this.updatedAt = parsedProduct.updatedAt;
  }
}

export { Product };
