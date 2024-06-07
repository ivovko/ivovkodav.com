"use server";

import { getDBClient } from "@/db/db-api";

export async function getComments() {
  const db = await getDBClient();
  try {
    return (await db.query(`SELECT * FROM comment`))[0];
  } catch (err) {
    console.log(err);
  }
}
