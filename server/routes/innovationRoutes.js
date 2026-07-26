import express from "express";
import upload from "../middleware/upload.js";

import {
  createInnovation,
  getInnovations,
  getInnovation,
  updateInnovation,
  deleteInnovation,
} from "../controllers/innovationController.js";

const router = express.Router();

router.post("/", upload.single("image"), createInnovation);

router.get("/", getInnovations);

router.get("/:id", getInnovation);

router.put("/:id", upload.single("image"), updateInnovation);

router.delete("/:id", deleteInnovation);

export default router;