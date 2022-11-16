import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    dialect: 'postgres',
    define: {
      timestamps: true
    }
};

module.exports = config;