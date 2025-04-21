import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, (error) => {
  if (!error) console.log(`Server successfully started, listening on port ${PORT}`);
  else console.error("Error occurred, server can't start", error);
});
