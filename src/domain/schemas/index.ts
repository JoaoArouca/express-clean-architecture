import { randomUUID } from 'crypto';
import { z } from 'zod';

const CategoryEnum = z.enum(['electronics', 'clothing', 'food', 'general']);

const productSchema = z.object({
  id: z.string().default(() =>  randomUUID()),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  quantity: z.number(),
  category: CategoryEnum.default(CategoryEnum.Enum.general),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export { productSchema, CategoryEnum };