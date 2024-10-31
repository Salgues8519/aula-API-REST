import {Router} from 'express'
import { atualizar, atualizarEmail, cadastrar, detalhar, excluir, listar } from './controladores/instrutores'

const rotas = Router()

rotas.get('/instrutores', listar)  //listar todos intrututores

rotas.get('/instrutores/:id', detalhar)  //detalhar as informações de um instrutor 

rotas.post('/instrutores', cadastrar) //cadastrar instrutor 

rotas.put('/instrutores/:id', atualizar) //editar um instrutor 
rotas.patch('/instrutores/:id/alterarEmail',atualizarEmail)  //editar um instrutor (parcialmente)


rotas.delete('/instrutores/:id', excluir)  //excluir um instrutor 
//cadastrar uma aula para um instrutor 
//excluir uma aula para um instrutor 


export default rotas