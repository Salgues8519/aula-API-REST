import{ Request, Response } from 'express'

export const teste = (req:Request, res:Response):any =>{
    return res.send ('okay')
}