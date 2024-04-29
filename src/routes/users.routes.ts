import { createUser, getUsers, updateUserByDoc, deleteUserByDoc, getUserByDoc } from '../controllers/users.controller'
import { Router } from 'express'

export const UserRoutes = Router();

UserRoutes.get('/users', getUsers)

UserRoutes.get('/user', getUserByDoc)

UserRoutes.post('/register', createUser)

UserRoutes.put('/update', updateUserByDoc)

UserRoutes.delete('/delete', deleteUserByDoc)


