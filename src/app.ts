import express from 'express'
import cors from 'cors'
import { envs } from './config/envs.config'
import { AppRouter } from './routes'
import { MongoDatabase } from './config/mongo.config'

const PORT = envs.PORT || 4000

const app = express()

//INFO: middlewares
app.use(cors({ credentials: true, origin: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//INFO: routes
app.use(AppRouter.routes)

//INFO: connect db
MongoDatabase.connect({
  mongoURI: envs.MONGO_URI,
  dbName: envs.DB_NAME
})

//INFO: port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
