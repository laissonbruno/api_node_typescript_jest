import { Router, Request, Response } from "express";
import { CreateUserController } from '../controllers/CreateUserController'

const router = Router();
const createUserController = new CreateUserController();



router.get('/', (req: Request, res: Response) => {
    return res.json({ mensagem: 'Bem vindo' })
})

router.post('/users', createUserController.handle)


export { router };