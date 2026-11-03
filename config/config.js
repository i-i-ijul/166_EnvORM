require("dotenv").config();

const development = {
  username: proccess.env.DB_USER,
  password: proccess.env.DB_PASS,
  database: proccess.env.DB_DATABASE,
  host: proccess.env.DB_HOST,
  port: proccess.env.DB_PORT,
  dialect: proccess.env.DB_DIALECT,
}

const production = {
  use_env_variable: 'POSTGRES_URL',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
};

module.exports = {
  development,
  production
}