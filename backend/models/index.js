module.exports = {
  development: {
    username: process.env.DB_USER || 'yourUsername',
    password: process.env.DB_PASSWORD || 'yourPassword',
    database: process.env.DB_NAME || 'yourDatabase',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'postgres', // Ensure this is set
    logging: false, // Optional, can be true for debugging
  },
  test: {
    username: 'testUser',
    password: 'testPassword',
    database: 'testDatabase',
    host: 'localhost',
    dialect: 'sqlite',
    storage: ':memory:', // Only needed for SQLite
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'postgres', // Set the dialect here too
    logging: false,
  },
};
