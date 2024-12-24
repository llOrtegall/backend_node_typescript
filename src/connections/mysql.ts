import { MYSQL_DB, MYSQL_HOST, MYSQL_PASS, MYSQL_PORT, MYSQL_USER } from '../config/enviroments'
import { createPool } from 'mysql2/promise'

export const pool_mysql = createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASS,
  port: parseInt(MYSQL_PORT),
  database: MYSQL_DB,
})