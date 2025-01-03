import express, { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import csvParser from 'csv-parser'
const app = express()
app.use(express.json())

interface Item {
  id: number
  name: string
  price: number
  amount: number
}

// Path to the CSV file
const csvFilePath = path.join(process.cwd(), 'items.csv')

// Helper function to read items from the CSV file
function readItemsFromCSV(): Promise<Item[]> {
  return new Promise((resolve, reject) => {
    const items: Item[] = []
    fs.createReadStream(csvFilePath)
      .pipe(csvParser())
      .on('data', (row: Item) => {
        items.push({
          id: row.id,
          name: row.name,
          price: row.price,
          amount: row.amount,
        })
      })
      .on('end', () => resolve(items))
      .on('error', (err: any) => reject(err))
  })
}

// Helper function to write items to the CSV file
function writeItemsToCSV(items: Item[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const header = 'id,name,price,amount\n'
    const rows = items
      .map((item) => `${item.id},${item.name},${item.price},${item.amount}`)
      .join('\n')
    fs.writeFile(csvFilePath, header + rows, 'utf8', (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

// Get all items
app.get('/items', async (req: Request, res: Response) => {
  try {
    const items = await readItemsFromCSV()
    res.json(items)
  } catch (err) {
    res.status(500).json({ error: 'Failed to read items' })
  }
})

// Missing: Implement update and delete

app.listen(3000, () => console.log('Server running on port 3000'))
