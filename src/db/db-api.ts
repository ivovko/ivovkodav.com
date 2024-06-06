import mysql from "mysql2/promise";

export let db: mysql.Connection;

export async function generateDBClient() {
  db = await mysql.createConnection({
    host: "localhost",
    database: process.env.MYSQL_DATABASE,
    port: +(process.env.MYSQL_PORT ?? 0),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  db.connect();
}
