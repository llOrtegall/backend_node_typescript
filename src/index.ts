import express from 'express'
import 'dotenv/config'

import { userRouter } from './routes/user.routes'

const PORT = 3000
const app = express()

app.use(express.json())

app.use(userRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

