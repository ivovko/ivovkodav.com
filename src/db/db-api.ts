"use server";

import { Pool, createPool } from "mysql2/promise";

let db: Pool | undefined = undefined;

export async function getDBClient() {
  if (typeof db !== "undefined") {
    return db;
  }

  db = createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    port: +process.env.MYSQL_PORT!,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  return db;
}
