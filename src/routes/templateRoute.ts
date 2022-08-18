import { Router } from 'express';

const router = Router();

router.route("/")
  .get((req, res) => {
    res.status(200).json({ message: "This will GET all Templates" });
  })
  .delete((req, res) => {
    res.status(200).json({ message: "This will DELETE all Templates" })
  })

router.route("/:name")
  .get((req, res) => {
    const { name } = req.params
    res.status(200).json({ message: "This will GET specific Template", name: name })
  })
  .post((req, res) => {
    const { name } = req.params
    res.status(200).json({ message: "This will ADD specific Template", name: name })
  })

  .patch((req, res) => {
    const { name } = req.params
    res.status(200).json({ message: "This will UPDATE specific Template", name: name })
  })
  .delete((req, res) => {
    const { name } = req.params
    res.status(200).json({ message: "This will DELETE specific Template", name: name })
  })

export default router;