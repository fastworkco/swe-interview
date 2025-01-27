import express, { Request, Response } from 'express'
import Knex from 'knex'
import config from './knexfile'

const knex = Knex(config.development)
const app = express()
app.use(express.json())

interface Item {
  id: number
  name: string
  price: number
  amount: number
}

// Get all items
app.get('/items', async (req: Request, res: Response) => {
  try {
    const items = await knex<Item>('items').select('*')
    res.json(items)
  } catch (err) {
    res.status(500).json({ error: 'Failed to read items' })
  }
})

// Missing: Implement create, update and delete

app.listen(3000, () => console.log('Server running on port 3000'))
