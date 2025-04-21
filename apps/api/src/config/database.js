import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

export const DATABASE_URL = {
  connectionString: process.env.DATABASE_URL,
};
