import { IProduct } from "../../domain/interfaces";

export interface IInMemoryRepository {
    save(product: IProduct): void
}