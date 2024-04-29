import { pool_mysql } from '../connections/mysql'
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise' 
import { User } from '../types/user'
import bycript from 'bcryptjs'

interface User_Doc extends RowDataPacket {
  nombres: string
  apellidos: string
  documento: number
  telefono: number
  correo: string
  usuario: string
  pass_1: string
  estado: number
  empresa: number
  proceso: number
  rol: string
}

export const createUserService = async (data: User) => {
  const { apellidos, correo, documento, nombres, telefono } = data

  const usuario = `CP${documento}`
  const password = `CP${documento}`.slice(-3)  

  const hash_pass = await bycript.hash(password, 10)

  return pool_mysql.execute<ResultSetHeader>(
    'INSERT INTO usuarios (nombres, apellidos, documento, telefono, correo, usuario, pass_1, estado, empresa, proceso, rol)' + 
    'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [nombres, apellidos, documento, telefono, correo, usuario, hash_pass, 1, 1, 1, '']
  )
}

export const getUsersService = async () => {
  return pool_mysql.query('SELECT * FROM usuarios')
}

export const getUserByDocService = async (documento: number): Promise<Partial<User_Doc[]>> => {
  const [user] = await pool_mysql.execute<User_Doc[]>('SELECT * FROM usuarios WHERE documento = ?', [documento])
  return user as Partial<User_Doc[]>
}

export const updateServiceByDoc = async (data: User) => {
  const { apellidos, correo, documento, nombres, telefono } = data

  return pool_mysql.execute<ResultSetHeader>(
    'UPDATE usuarios SET nombres = ?, apellidos = ?, telefono = ?, correo = ? WHERE documento = ?',
    [nombres, apellidos, telefono, correo, documento]
  )
}

export const deleteServiceByDoc = async (documento: number) => {
  return pool_mysql.execute<ResultSetHeader>(
    'DELETE FROM usuarios WHERE documento = ?',
    [documento]
  )
}