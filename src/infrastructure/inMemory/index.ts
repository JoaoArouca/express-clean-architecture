import { IProduct } from "../../domain/interfaces";
import { IProductRepository } from "../../application/repositories/IProductRepository";

export class InMemoryRepositoryImp implements IProductRepository {
  private localDatabase: IProduct[] = [];

  create(product: IProduct): void {
    this.localDatabase.push(product);
  }

  getAll(): IProduct[] {
      return this.localDatabase
  }
}
