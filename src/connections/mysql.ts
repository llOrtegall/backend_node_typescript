import { createPool } from 'mysql2/promise'
import 'dotenv/config'

export const pool_mysql = createPool({
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT as string),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})