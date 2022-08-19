import express from 'express';
import config from "./config/default";
import router from "./router";
import log from "./log/logger";
import { connectWithDatabase } from "./db/connect";
import cors from "cors";


const port = config.port || 3000;

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
