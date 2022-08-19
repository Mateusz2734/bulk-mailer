import { Router } from 'express';
import { createGroupHandler, findAllGroupsHandler, deleteAllGroupsHandler, findGroupHandler, deleteGroupHandler, updateGroupHandler } from "../controller/group.controller";
import { trace } from "../middleware/trace";

const router = Router();

router.route("/")
  .get(trace, findAllGroupsHandler)
  .delete(trace, deleteAllGroupsHandler);

router.route("/:name")
  .get(trace, findGroupHandler)
  .post(trace, createGroupHandler)

  .put(trace, updateGroupHandler)
  .delete(trace, deleteGroupHandler);

export default router;