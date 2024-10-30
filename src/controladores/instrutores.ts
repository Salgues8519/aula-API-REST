import{ Request, Response } from 'express'

type TInstrutores = {
    id: number
    nome: string 
    email: string
}

let proximoIdentificador =3

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

export const detalhar = (req:Request, res:Response):any =>{
    const { id } = req.params

    const instrutor = instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({
            mensagem : 'Instrutor não encontrado(a)'
        })
    }
    
    return res.status(200).json(instrutor)
}

export function cadastrar(req:Request, res:Response):any {
  const { nome, email } =req.body

const novoInstrutor = {
    id: proximoIdentificador++,
    nome,
    email

  }

  instrutores.push(novoInstrutor)

  return res.status(201).json(novoInstrutor)
    
}