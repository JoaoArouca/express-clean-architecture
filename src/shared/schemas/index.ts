import { z } from 'zod';

const CategoryEnum = z.enum(['electronics', 'clothing', 'food', 'general']);

const productSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  quantity: z.number(),
  category: CategoryEnum.default(CategoryEnum.Enum.general),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

type ProductType = z.infer<typeof productSchema>;

export { productSchema, ProductType, CategoryEnum };