import { pool_mysql } from '../connections/mysql'
import { ResultSetHeader } from 'mysql2/promise' 
import { User } from '../types/user'

export const createUserService = async (data: User) => {
  const { apellidos, correo, documento, nombres, telefono } = data

  const usuario = `CP${documento}`
  const password = `CP${documento}`.slice(-3)  

  return pool_mysql.execute<ResultSetHeader>(
    'INSERT INTO usuarios (nombres, apellidos, documento, telefono, correo, usuario, pass_1, estado, empresa, proceso, rol)' + 
    'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [nombres, apellidos, documento, telefono, correo, usuario, password, 1, 1, 1, '']
  )
}