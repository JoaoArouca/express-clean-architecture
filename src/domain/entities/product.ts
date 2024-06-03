import { IProduct } from "../interfaces";

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
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }
}

export { Product };
