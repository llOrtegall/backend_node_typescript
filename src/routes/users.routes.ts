import { createUser, getUsers, updateUserByDoc, deleteUserByDoc } from '../controllers/users.controller'
import { Router } from 'express'

export const UserRoutes = Router();

UserRoutes.post('/register', createUser)

UserRoutes.get('/users', getUsers)

UserRoutes.put('/update', updateUserByDoc)

UserRoutes.delete('/delete', deleteUserByDoc)

