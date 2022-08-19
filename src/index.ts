import express from 'express';
import dotenv from 'dotenv';
import router from "./router";
import log from "./log/logger";
import { connectWithDatabase } from "./db/connect";
import cors from "cors";

dotenv.config();

const port = process.env.PORT as string || 3000;

const app = express();

// Define middlewares
app.use(cors());
app.use(express.json());

// Define routes
app.use(router);

app.listen(port, () => {
  log.info(`Server started on port ${port}.`);
  connectWithDatabase();
});
