import{ Request, Response } from 'express'

type TInstrutores = {
    id: number
    nome: string 
    email: string
}

const instrutores:TInstrutores[] = [
    {
        id: 1,
        nome: 'Guido',
        email: 'guido@email.com'
    },
    {
        id: 2,
        nome: 'Maria',
        email: 'maria@email.com'
    }
]

export const listar = (req:Request, res:Response):any =>{
    return res.status(200).json(instrutores)
}