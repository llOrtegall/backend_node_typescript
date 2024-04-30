import { createUserService, getUsersService, updateServiceByDoc, deleteServiceByDoc, getUserByDocService } from '../services/user.services'
import { type Request, type Response } from 'express'
import { validateUser } from '../schemas/user.schema'
import { ErrorMySQL } from '../types/mysql'

export async function createUser(req: Request, res: Response) {
  const userValidate = validateUser(req.body)

  if (userValidate.error) {
    return res.status(400).json({
      message: userValidate.error
    })
  }

  try {
    const result = await createUserService(userValidate.data)
    if (result.affectedRows === 1) {
      return res.status(201).json({ message: 'Usuario creado correctamente' })
    }
    return res.status(500).json({ message: 'Error al crear el usuario' })
  } catch (error) {
    const err = error as ErrorMySQL
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ message: `${err.sqlMessage}` })
    }
    return res.status(500).json({ message: 'Error al crear el usuario' })
  }

}

export async function getUsers(_req: Request, res: Response) {
  try {
    const users = await getUsersService()
    return res.status(200).json(users)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener los usuarios' })
  }
}

export async function getUserByDoc(req: Request, res: Response) {
  const documento = req.params.documento
  
  if (documento === undefined || documento === null) { 
    return res.status(400).json({ message: 'El parametro documento es requerido' })
  }

  try {
    const result = await getUserByDocService(documento)
    if (!result) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    
    const { apellidos, nombres, correo, documento: cedula, telefono } = result[0]

    return res.status(200).json({
      apellidos,
      nombres,
      correo,
      cedula,
      telefono
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener el usuario' })
  }
}


export async function updateUserByDoc(req: Request, res: Response) {
  const userValidate = validateUser(req.body)

  if (userValidate.error) {
    return res.status(400).json({
      message: userValidate.error
    })
  }

  try {
    const result = await updateServiceByDoc(userValidate.data)
    if (result.affectedRows === 1) {
      return res.status(200).json({ message: 'Usuario actualizado correctamente' })
    }
    return res.status(500).json({ message: 'Error al actualizar el usuario' })
  } catch (error) {
    console.log(error);
    const err = error as ErrorMySQL
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ message: `${err.sqlMessage}` })
    }
    return res.status(500).json({ message: 'Error al actualizar el usuario' })
  }
}

export async function deleteUserByDoc(req: Request, res: Response) {
  const data = req.body
  const documento = data.documento as number

  if (documento === undefined) {
    return res.status(400).json({ message: 'El campo documento es requerido' })
  }

  try {
    const result = await deleteServiceByDoc(documento)
    console.log(result);
    
    if (result.affectedRows === 1) {
      return res.status(200).json({ message: 'Usuario eliminado correctamente' })
    } else if (result.affectedRows === 0){
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al eliminar el usuario' })
  }
  
}