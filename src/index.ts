import { UserRoutes } from './routes/users.routes'
import { pool_mysql } from './connections/mysql'
import { PORT } from './config/enviroments'
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', UserRoutes)

app.listen(PORT, () => {
  console.log(`Server Is Running On  http://localhost:${PORT}`);
});

// Test Connection
pool_mysql.pool.getConnection((err, connection) => {
  if (err) throw err;

  connection.query('SELECT 1 + 1 ', (err, result) => {
    connection.release();
    if (err) throw err;
    console.log('Database Connected', result);
  });

})