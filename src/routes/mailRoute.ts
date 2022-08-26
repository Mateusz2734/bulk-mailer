import { Router } from 'express';
import { sendMailHandler } from "../controller/mail.controller";
import { trace } from "../middleware/trace";

const router: Router = Router();

router.post("/", sendMailHandler);

export default router;