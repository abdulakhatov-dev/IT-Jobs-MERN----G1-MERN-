import { Router } from "express";
import { verifyToken } from "../../../middlewares/verifyToken";

import {
  uploadPDF,
  uploadImage,
  uploadMultipleImages,
} from "../../../controllers/upload";
import { upload } from "../../../config/multer";

const router = Router();

// POST: upload single image
router.post(
  "/image",
  // verifyToken as any,
  upload.single("image"),
  uploadImage as any
);

// POST: upload multiple images
router.post(
  "/images",
  verifyToken as any,
  upload.array("images", 4),
  uploadMultipleImages as any
);

// POST: upload single pdf
router.post("/pdf", verifyToken as any, upload.single("pdf"), uploadPDF as any);

export default router;
