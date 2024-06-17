"use server";

import { getDBClient } from "@/db/db-api";

export async function getComments(): Promise<Feedback[]> {
  const db = await getDBClient();
  try {
    const queryResult = await db.execute(`SELECT * FROM comment`);
    return queryResult[0] as Feedback[];
  } catch (err) {
    console.log(`Failed to query data from database: ${err}`);
    throw err;
  }
}
