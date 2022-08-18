import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config()

const port = process.env.PORT || 3000

const app = express();

app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the Bulk Mailer" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});