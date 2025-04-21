import express from "express";
import cors from "cors";
import accountRouter from "./routes/accountRoute.js";

const app = express();

// Middleware setup
app.use(cors()); // allows requests from any origin
app.use(express.json());

app.use("/api/account", accountRouter);

export default app;
