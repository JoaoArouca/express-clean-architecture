import { IProduct } from "../../domain/interfaces";

export interface IProductRepository {
  create(product: IProduct): void;
  getAll(): IProduct[]
}
