import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import groupRoute from "./routes/groupRoute"
import templateRoute from "./routes/templateRoute"

dotenv.config()

const port = process.env.PORT || 3000

const app = express();

// Define middlewares
app.use(bodyParser.json())

// Define routes
app.use("/groups", groupRoute)
app.use("/templates", templateRoute)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the Bulk Mailer" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});