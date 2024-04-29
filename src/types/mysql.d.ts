export interface ErrorMySQL {
  code: string;
  errno: number;
  sql: string;
  sqlState: string;
  sqlMessage: string;
}