import { MongoClient, Db, Collection } from 'mongodb'
import Joke from '~/models/Schemas/Joke.schema'

const uri = `mongodb+srv://giaq1412:Giang14122002@jokes.tfgrjmf.mongodb.net/`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db('jokes')
  }

  async connect() {
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log('Error', error)
      throw error
    }
  }

  get jokes(): Collection<Joke> {
    return this.db.collection('jokes' as string)
  }
}

// Tạo object từ class DatabaseService
const databaseService = new DatabaseService()
export default databaseService
