import { Router } from "express";
import { verifyToken } from "../../../middlewares/verifyToken";
import {
  applyJob,
  getAllAppliedJobs,
  getAllAppliedUserJobs,
} from "../../../controllers/apply-job";

const router = Router();

// POST: apply jobs
router.post("/", verifyToken as any, applyJob as any);

// GET: get applied jobs
router.get("/jobs", verifyToken as any, getAllAppliedJobs as any);

// GET: get applied jobs by userId
router.get("/jobs/:userId", verifyToken as any, getAllAppliedUserJobs as any);

export default router;
