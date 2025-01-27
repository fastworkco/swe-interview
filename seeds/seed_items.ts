import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('items').del()

  // Inserts seed entries
  await knex('items').insert([
    {
      name: 'Potato',
      price: '10',
      amount: '100',
    },
    {
      name: 'Carrot',
      price: '15',
      amount: '20',
    },
  ])
}
