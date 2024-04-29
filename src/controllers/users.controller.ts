import { type Request, type Response } from 'express'
import { validateUser } from '../schemas/user.schema'
import { createUserService } from '../services/user.services'

export function createUser(req: Request, res: Response) {
  const userValidate = validateUser(req.body)

  if (userValidate.error){
    return res.status(400).json({
      message: userValidate.error
    })
  }

  createUserService(userValidate.data)

}