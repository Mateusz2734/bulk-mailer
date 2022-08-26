import { Router } from 'express';
import templateRoute from "./routes/templateRoute";
import groupRoute from "./routes/groupRoute";
import mainRoute from "./routes/mainRoute";
import mailRoute from "./routes/mailRoute";


const router: Router = Router();

router.use("/", mainRoute);
router.use("/mail", mailRoute);
router.use("/groups", groupRoute);
router.use("/templates", templateRoute);

export default router;