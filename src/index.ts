import { WebSocketServer } from 'ws';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (conn, req) => {
  console.log('New WebSocket connection');
})