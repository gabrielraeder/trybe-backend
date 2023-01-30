// src/config/config.js

require('dotenv').config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: 'employees_associations_development',
  },
  test: {
    ...config,
    database: 'employees_associations_test',
    logging: false,
  },
  production: {
    ...config,
    database: 'employees_associations_production',
  },
};