import { Router } from 'express';
import { createGroupHandler, findAllGroupsHandler } from "../controller/group.controller";

const router = Router();

router.route("/")
  .get(findAllGroupsHandler)
  .delete((req, res) => {
    res.status(200).json({ message: "This will DELETE all Groups" });
  });

router.route("/:name")
  .get((req, res) => {
    const { name } = req.params;
    res.status(200).json({ message: "This will GET specific Group", name: name });
  })
  .post(createGroupHandler)

  .put((req, res) => {
    const { name } = req.params;
    res.status(200).json({ message: "This will UPDATE specific Group", name: name });
  })
  .delete((req, res) => {
    const { name } = req.params;
    res.status(200).json({ message: "This will DELETE specific Group", name: name });
  });

export default router;