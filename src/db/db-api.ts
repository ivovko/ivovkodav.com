"use server";

import mysql from "mysql2/promise";

const db: mysql.Pool = mysql.createPool({
  host: "localhost",
  database: process.env.MYSQL_DATABASE,
  port: +(process.env.MYSQL_PORT ?? 0),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

export async function getDBClient() {
  return db;
}
