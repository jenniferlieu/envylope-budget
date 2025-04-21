import pkg from "pg";
const { Client } = pkg;
import { DATABASE_URL } from "../config/database";

export default async function getClient() {
  const client = new Client(DATABASE_URL);
  try {
    await client.connect();
    const res = await client.query("SELECT $1::text as connected", ["Connection to postgres successful!"]);
    console.log(res.rows[0].connected);
  } catch (err) {
    console.error("Failed to connect to database:\n", err);
  }
  return client;
}
