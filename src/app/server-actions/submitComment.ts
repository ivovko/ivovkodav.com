"use server";

import { getDBClient } from "@/db/db-api";
import { isEmpty } from "lodash";

export async function submitComment(data: CreateFeedback) {
  const db = await getDBClient();
  try {
    await db.execute(
      `INSERT INTO ivovkodav.comment (name, company, position, content) VALUES (?, ?, ?, ?)`,
      [
        isEmpty(data.name) ? null : data.name,
        isEmpty(data.company) ? null : data.company,
        isEmpty(data.position) ? null : data.position,
        data.content,
      ]
    );
  } catch (err) {
    console.log(err);
  }
}
