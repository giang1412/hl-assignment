import { ObjectId } from 'mongodb'

interface JokeType {
  _id?: ObjectId
  jokeText: string
  likes: number
  dislike: number
}

export default class Joke {
  _id?: ObjectId
  jokeText: string
  likes: number
  dislikes: number

  constructor(joke: JokeType) {
    this._id = joke._id
    this.jokeText = joke.jokeText || ''
    this.likes = joke.likes || 0
    this.dislikes = joke.dislike || 0
  }
}
