require('dotenv').config();
const pg = require('pg');

pg.defaults.ssl = true;

const dbConnection = process.env.DATABASE_URL;
// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/team.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },
  test: {
    client: 'sqlite3',
    connection: { filename: './data/test.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    }
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
    },
  },
}
