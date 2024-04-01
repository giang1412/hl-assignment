import { Request, Response } from 'express'
import jokeService from '~/services/jokes.services'

export const jokeController = async (req: Request, res: Response) => {
  try {
    const data = await jokeService.getAllJokes()
    if (!data.length) {
      return res.status(404).json({ message: "That's all the jokes for today! Come back another day!" })
    }
    res.json(data)
  } catch (error) {
    console.error('Error fetching jokes:', error)
    res.status(500).send('Internal Server Error')
  }
}

export const voteJokeController = async (req: Request, res: Response) => {
  try {
    const { jokeId } = req.params
    const { vote } = req.body

    if (vote !== 'like' && vote !== 'dislike') {
      return res.status(400).json({ message: 'Invalid vote type' })
    }
    const result = await jokeService.voteJokeService({ jokeId, vote })

    if (!result) {
      return res.status(404).json({ message: 'Joke not found' })
    }

    res.status(200).json({ message: 'Vote successfully' })
  } catch (error) {
    console.error('Error handling vote:', error)
    res.status(500).send('Internal Server Error')
  }
}
