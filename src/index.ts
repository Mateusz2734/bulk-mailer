import express, { Express } from 'express';
import cors from "cors";
import { connectWithDatabase } from "./db/connect";
import config from "./config/default";
import log from "./log/logger";
import router from "./router";


const port = config.port || 3000;

const app: Express = express();

// Define middlewares
app.use(cors());
app.use(express.json());

// Define routes
app.use(router);

app.listen(port, (): void => {
  log.info(`Server started on port ${port}.`);
  connectWithDatabase();
});
