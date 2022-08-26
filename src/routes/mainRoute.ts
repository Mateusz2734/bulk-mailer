import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
  res.status(200).json({ message: "Welcome to the Bulk Mailer API" });
});

export default router;
