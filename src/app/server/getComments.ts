"use server";

import { db } from "@/db/db-api";

export async function getComments() {
  await db;
  try {
    return (await db.query(`SELECT * FROM comment`))[0];
  } catch (err) {
    console.log(err);
  }
}
