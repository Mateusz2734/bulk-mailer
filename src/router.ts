import { Router } from 'express';
import groupRoute from "./routes/groupRoute"
import templateRoute from "./routes/templateRoute"
import mainRoute from "./routes/mainRoute"


const router = Router();

router.use("/", mainRoute)
router.use("/groups", groupRoute);
router.use("/templates", templateRoute);

export default router;