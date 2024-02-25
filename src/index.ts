import express, { Request, Response} from 'express'

const PORT = 3000
const app = express()

app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  console.log('Someone has visited the root route!');
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

