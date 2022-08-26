import { Router } from 'express';
import { sendMailHandler } from "../controller/mail.controller";

const router: Router = Router();

router.post("/", sendMailHandler);

export default router;