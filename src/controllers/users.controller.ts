import { type Request, type Response } from 'express'
import { validateUser } from '../schemas/user.schema'
import { createUserService } from '../services/user.services'
import { ErrorMySQL } from '../types/mysql'

export async function createUser(req: Request, res: Response) {
  const userValidate = validateUser(req.body)

  if (userValidate.error) {
    return res.status(400).json({
      message: userValidate.error
    })
  }

  try {
    const [user] = await createUserService(userValidate.data)
    if (user.affectedRows === 1) {
      return res.status(201).json({ message: 'Usuario creado correctamente' })
    }
    return res.status(500).json({ message: 'Error al crear el usuario' })
  } catch (error) {
    const err = error as ErrorMySQL
    if(err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ message: `${err.sqlMessage}` })
    }
    return res.status(500).json({ message: 'Error al crear el usuario' })
  }

}