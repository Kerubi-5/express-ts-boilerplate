import express from "express";
const router = express.Router();
import { HomeController } from "../../controllers";

router
  .route("/")
  .get(HomeController.index)
  .post(HomeController.store)
  .put(HomeController.update)
  .delete(HomeController.destroy);

router.get("/:id", HomeController.show);

export default router;
