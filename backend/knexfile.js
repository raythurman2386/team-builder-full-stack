require('dotenv').config()
const pg = require('pg')

process.env.DATABASE_URL ? (pg.defaults.ssl = true) : (pg.defaults.ssl = false)

const dbConnection = process.env.DATABASE_URL || localPg

const sqlite3 = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    }
  }
}

module.exports = {
  development: {
    ...sqlite3,
    connection: { filename: './data/team.db3' }
  },
  test: {
    ...sqlite3,
    connection: { filename: './data/test.db3' }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
}
