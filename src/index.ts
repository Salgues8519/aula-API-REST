import 'dotenv/config'
import express, { Request, Response } from 'express'

const app = express()

app.get('/', (rea:Request, res:Response):any=>{
    return res.send('okay')
})

app.listen(process.env.PORT)
