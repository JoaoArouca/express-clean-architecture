import { Request, Response } from "express";
import { ICreateProductOutput } from "../transport/CreateProdutOutput";
import { IProductRepository } from "../../application/repositories/IProductRepository";
import { InMemoryRepositoryImp } from "../../infrastructure/inMemory";

export class ProductController {
    static async createProduct(req: Request, res: Response): Promise<ICreateProductOutput> {
        const inMemoryRepository: IProductRepository = new InMemoryRepositoryImp();

        const output: ICreateProductOutput = {
            productId: "test"
        }

        return output
    }
}