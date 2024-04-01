import { ObjectId } from 'mongodb'
import databaseService from '~/services/database.services'

class JokeService {
  async getAllJokes() {
    return await databaseService.jokes.find({}).toArray()
  }

  async voteJokeService({ jokeId, vote }: { jokeId: string; vote: string }) {
    return await databaseService.jokes.findOneAndUpdate(
      { _id: new ObjectId(jokeId) },
      { $inc: { [vote === 'like' ? 'likes' : 'dislikes']: 1 } },
      { returnDocument: 'after' }
    )
  }
}
const jokeService = new JokeService()
export default jokeService
