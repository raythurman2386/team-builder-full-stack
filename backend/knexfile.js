require('dotenv').config();
const pg = require('pg');

const localPg = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

pg.defaults.ssl = true;

const dbConnection = process.env.DATABASE_URL || localPg;
// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: localPg,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      min: 2, max: 10
    },
  },
  test: {
    client: 'pg',
    connection: localPg,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      min: 2, max: 10
    },
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
};
