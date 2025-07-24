import express from "express";
import { postData } from "../controllers/postDataController.js";

const postDataRouter = express.Router();

postDataRouter.post("/", postData);

export default postDataRouter;
