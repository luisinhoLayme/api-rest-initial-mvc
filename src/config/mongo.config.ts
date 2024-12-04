import mongoose from 'mongoose'
import { Options } from './../interfaces'

export class MongoDatabase {

  static async connect(options: Options) {
    const { mongoURI, dbName } = options

    try {
      await mongoose.connect(mongoURI, { dbName })
      return true
    } catch (err) {
      console.log('Mongo connection error')
      throw err
    }
  }
}
