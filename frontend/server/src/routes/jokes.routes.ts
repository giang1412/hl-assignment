import { Router } from 'express'
import { jokeController, voteJokeController } from '~/controllers/jokes.controller'
const jokeRouter = Router()

jokeRouter.get('/', jokeController)
jokeRouter.post('/:jokeId/vote', voteJokeController)
export default jokeRouter
