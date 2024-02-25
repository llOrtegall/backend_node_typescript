import { pool } from '../connections/db_company_connection';
import { Request, Response } from 'express';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await pool.query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.log(error);    
  }
}