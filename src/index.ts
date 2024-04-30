import { UserRoutes } from './routes/users.routes'
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', UserRoutes)

app.listen(PORT, () => {
  console.log(`Server Is Running On  http://localhost:${PORT}`);
});