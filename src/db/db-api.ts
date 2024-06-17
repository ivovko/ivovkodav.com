"use server";

import { Pool, createPool } from "mysql2/promise";

let db: Pool | undefined = undefined;

export async function getDBClient() {
  if (typeof db !== "undefined") {
    return db;
  }

  db = createPool({
    host: "mysql",
    database: process.env.MYSQL_DATABASE,
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
  });

  return db;
}
