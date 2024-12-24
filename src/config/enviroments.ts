import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.string().min(1, 'PORT es requerido').default('3000'),
  CORS: z.string().min(1, 'CORS es requerido').default('*'),
  MYSQL_HOST: z.string().min(1, 'MYSQL_HOST es requerido').default('localhost'),
  MYSQL_PORT: z.string().min(1, 'MYSQL_PORT es requerido').default('3306'),
  MYSQL_USER: z.string().min(1, 'MYSQL_USER es requerido').default('root'),
  MYSQL_PASS: z.string().min(1, 'MYSQL_PASSWORD es requerido').default('root'),
  MYSQL_DB: z.string().min(1, 'MYSQL_DATABASE es requerido').default('test'),
})

const { success, data, error } = envSchema.safeParse(process.env);

if (!success) {
  console.error(error);
  process.exit(1);
}

export const {
  PORT,
  CORS,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_DB,
} = data;