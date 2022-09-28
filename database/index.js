//! Faz o requerimento do intermediador de conexões PostgreSQL:
const { Pool } = require('pg');

//! Faz a chamada do dotenv:
require('dotenv').config();

//! Faz a conexão com o banco de dados:
const pool = new Pool(
    {
        //* Passa os dados da conexão:
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        database: process.env.PG_DATABASE
    }
);