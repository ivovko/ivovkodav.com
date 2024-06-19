"use server";

import { Pool, createPool } from "mysql2/promise";

let db: Pool | undefined = undefined;

export async function getDBClient() {
  if (typeof db !== "undefined") {
    return db;
  }

  db = createPool({
    host: "localhost",
    database: process.env.MYSQL_DATABASE,
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  return db;
}
