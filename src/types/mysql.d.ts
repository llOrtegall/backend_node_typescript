import { RowDataPacket } from "mysql2/promise";

export interface ErrorMySQL {
  code: string;
  errno: number;
  sql: string;
  sqlState: string;
  sqlMessage: string;
}

interface User_Doc extends RowDataPacket{
  _id: string;
  nombres: string;
  apellidos: string;
  documento: number;
  telefono: number;
  correo: string;
  usuario: string;
  pass_1: string;
  pass_2: string;
  estado: number;
  empresa: number;
  proceso: number;
  rol: string;
  fecha_creacion: string;
  resetPasswordToken: string;
  resetPasswordExpires: string;
}
