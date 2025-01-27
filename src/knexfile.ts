import type { Knex } from 'knex'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'manage_item_user',
      password: 'manage_item_password',
      database: 'manage_item',
    },
    migrations: {
      extension: 'ts',
      directory: '../migrations',
    },
    seeds: {
      directory: '../seeds',
    },
  },
}

export default config
