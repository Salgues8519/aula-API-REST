import {Router} from 'express'
import { cadastrar, detalhar, listar } from './controladores/instrutores'

const rotas = Router()

rotas.get('/instrutores', listar)  //listar todos intrututores

rotas.get('/instrutores/:id', detalhar)  //detalhar as informações de um instrutor 

rotas.post('/instrutores', cadastrar) //cadastrar instrutor 
//editar um instrutor 
//excluir um instrutor 

//cadastrar uma aula para um instrutor 
//excluir uma aula para um instrutor 


export default rotas