import { IProduct } from "../../domain/interfaces";
import { IInMemoryRepository } from "./InMemoryRepositoryInterface";

export class InMemoryRepository implements IInMemoryRepository {
    private localDatabase: IProduct[] = []
    
    save(product: IProduct): void {
        this.localDatabase.push(product);
    }
    
}