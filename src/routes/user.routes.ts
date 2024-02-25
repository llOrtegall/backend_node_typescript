import router from 'express'
import { getUsers } from '../controllers/users.controllers'

export const userRouter = router.Router()

userRouter.get('/users', getUsers)
