import express from "express";
import dotenv from "dotenv";
import dataRouter from "./routes/dataRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.use('/api/data', dataRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
