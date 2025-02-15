const config = {
  development: {
    user: 'postgres',
    host: 'localhost',
    database: 'video_list',
    password: 'password',
    port: 5432,
  },
  production: {
    connectionString: process.env.DATABASE_URL,
  },
};

const env = process.env.NODE_ENV || 'development';

module.exports = config[env];
