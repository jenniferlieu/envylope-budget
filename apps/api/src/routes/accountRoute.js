import express from "express";
import * as accountController from "../controllers/accountController.js";

const router = express.Router();

router.get("/", accountController.getAllAccounts);

export default router;
