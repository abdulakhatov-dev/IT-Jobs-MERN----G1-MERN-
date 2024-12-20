import { Router } from "express";
import { verifyToken } from "../../../middlewares/verifyToken";
import { getAllUsers } from "../../../controllers/users";

const router = Router();

router.get("/", verifyToken as any, getAllUsers as any);

export default router;
