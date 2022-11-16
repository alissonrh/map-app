import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || 'admin',
    port: Number(process.env.DB_PORT) || 5433,
    database: process.env.DB_NAME || 'geolocation',
    dialect: 'postgres',
    define: {
      timestamps: true
    }
};

module.exports = config;