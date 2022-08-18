import { Router } from 'express';

const router = Router();

router.route("/")
  .get((req, res) => {
    res.status(200).json({ message: "This will GET all Groups" });
  })
  .delete((req, res) => {
    res.status(200).json({ message: "This will DELETE all Groups" })
  })

router.route("/:name")
  .get((req, res) => {
    const { name } = req.params
    res.status(200).json({ message: "This will GET specific Group", name: name })
  })
  .post((req, res) => {
    const { name } = req.params
    res.status(200).json({ message: "This will ADD specific Group", name: name })
  })

  .patch((req, res) => {
    const { name } = req.params
    res.status(200).json({ message: "This will UPDATE specific Group", name: name })
  })
  .delete((req, res) => {
    const { name } = req.params
    res.status(200).json({ message: "This will DELETE specific Group", name: name })
  })

export default router;