import { createUser } from '../controllers/users.controller'
import { Router } from 'express'

export const UserRoutes = Router();

UserRoutes.post('/register', createUser)
