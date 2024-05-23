import express, { Request, Response } from 'express'
import { env } from './env'

const app = express()
const PORT = env.PORT

app.listen(PORT, () => {
    console.log(`🚀 server is running on port: ${PORT}`)
})