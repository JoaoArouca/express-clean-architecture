import { Router, Request, Response } from "express";

const productsRoutes = Router();

productsRoutes.post(
  "/create-product",
  (request: Request, response: Response) => {
    return response.status(200).json("OK");
  }
);

export { productsRoutes };
