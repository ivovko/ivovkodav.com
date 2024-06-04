"use server";

import { getDBClient } from "@/db/db-api";

export async function Test() {
  const db = await getDBClient();
  return db.query(`INSERT INTO ivovkodav.comment (content) VALUES ("TEST")`);
}
