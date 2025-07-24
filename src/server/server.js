import express from "express";
import dotenv from "dotenv";
import dataRouter from "./routes/dataRouter.js";
import postDataRouter from "./routes/postDataRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use("/api/data", dataRouter);

app.use(express.json());
app.use("/api/postData", postDataRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
