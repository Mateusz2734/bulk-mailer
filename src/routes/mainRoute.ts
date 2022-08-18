import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the Bulk Mailer" });
});

export default router;
