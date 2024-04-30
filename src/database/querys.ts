import type { ResultSetHeader, Pool } from 'mysql2/promise'

// TODO: selects
export async function SelectQuery<T>(pool: Pool, queryStr: string, params?: any[]): Promise<Partial<T>[]> {
  const [results] = await pool.execute(queryStr, params)
  return results as T[]
}

// TODO: inserts, updates, deletes
export async function ModifyQuery(pool: Pool, queryStr:string, params?: any[]): Promise<ResultSetHeader> {
  const [results] = await pool.execute(queryStr, params);
  return results as ResultSetHeader
}