import express from 'express'
import databaseService from '~/services/database.services'
import jokeRouter from './routes/jokes.routes'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()
const port = 3300
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/jokes', jokeRouter)

databaseService.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
