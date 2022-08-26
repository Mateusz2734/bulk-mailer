import { Router } from 'express';
import { createTemplateHandler, findAllTemplatesHandler, deleteAllTemplatesHandler, findTemplateHandler, deleteTemplateHandler, updateTemplateHandler } from "../controller/template.controller";
import { trace } from "../middleware/trace";

const router: Router = Router();

router.route("/")
  .get(trace, findAllTemplatesHandler)
  .delete(trace, deleteAllTemplatesHandler);

router.route("/:name")
  .get(trace, findTemplateHandler)
  .post(trace, createTemplateHandler)
  .put(trace, updateTemplateHandler)
  .delete(trace, deleteTemplateHandler);

export default router;