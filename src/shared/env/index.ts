import dotenv from'dotenv'
import { z } from 'zod'

dotenv.config()

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.log('Invalid dotenv variable', _env.error.format())

  throw new Error('Invalid dotenv variable')
}

export const env = _env.data