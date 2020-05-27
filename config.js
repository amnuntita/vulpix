require("dotenv").config();

const { Pool } = require("pg");
const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: isProduction
    ? `postgres://mbheogppvtsjeh:67cef67ebbd8f5257f3e9dc89caaba0d8a50d6bab2ea4c974732329d24df00cd@ec2-52-44-55-63.compute-1.amazonaws.com:5432/dfap7v0cfe6k17?sslmode=require`
    : connectionString,
  ssl: isProduction,
});

module.exports = { pool };
