import { ModifyQuery, SelectQuery } from '../database/querys'
import { pool_mysql } from '../connections/mysql'
import type { User_Doc } from '../types/mysql'
import { User } from '../types/user'
import bycript from 'bcryptjs'

export const createUserService = async (data: User) => {
  const { apellidos, correo, documento, nombres, telefono } = data

  const usuario = `CP${documento}`
  const password = `CP${documento}`.slice(-3)  
  const hash_pass = await bycript.hash(password, 10)

  const QUERY = 'INSERT INTO usuarios (nombres, apellidos, documento, telefono, correo, usuario, pass_1, estado, empresa, proceso, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

  return ModifyQuery(pool_mysql, QUERY, [nombres, apellidos, documento, telefono, correo, usuario, hash_pass, 1, 1, 1, ''])
}

export const getUsersService = async () => {
  return SelectQuery<User_Doc>(pool_mysql, 'SELECT * FROM usuarios')
}

export const getUserByDocService = async (documento: string) => {
  const QUERY = 'SELECT * FROM usuarios WHERE documento = ?'
  return SelectQuery<User_Doc>(pool_mysql, QUERY, [documento])
}

export const updateServiceByDoc = async (data: User) => {
  const { apellidos, correo, documento, nombres, telefono } = data

  const QUERY = 'UPDATE usuarios SET nombres = ?, apellidos = ?, telefono = ?, correo = ? WHERE documento = ?'
  return ModifyQuery(pool_mysql, QUERY, [nombres, apellidos, telefono, correo, documento])
}

export const deleteServiceByDoc = async (documento: number) => {
  const QUERY = 'DELETE FROM usuarios WHERE documento = ?'
  return ModifyQuery(pool_mysql, QUERY, [documento])
}