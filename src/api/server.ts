import express, { Request, Response } from 'express'
import { env } from '../config/env'
import { productsRoutes } from './routes'

const app = express()
const PORT = env.PORT

app.use(express.json())
app.use(productsRoutes)

app.listen(PORT, () => {
    console.log(`🚀 server is running on port: ${PORT}`)
})