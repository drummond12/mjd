import express from "express";
import {
  getAllNotes,
} from "../controllers/noteController.js";

const noteRouter = express.Router();

noteRouter.get("/", getAllNotes);

export default noteRouter;
