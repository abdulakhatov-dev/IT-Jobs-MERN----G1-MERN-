import { Request, Response, NextFunction } from "express";

import JobModel from "../../models/job";
import { validateJob } from "../../validations/job";

export const getAllJobs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query?.page as string) || 1;
    const limit = parseInt(req.query?.limit as string) || 10;
    const search = String(req.query?.search || "") as string;
    // const category = String(req.query?.category || '') as string;

    const query = {
      title: { $regex: search, $options: "i" },
      // category: { $eq: category },
    };

    const skip = (page - 1) * limit;

    const data = await JobModel.find(query).skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      message: "ok",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getJobById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobId = req.params.jobId;

    if (!jobId) {
      throw new Error("Job Id is required!");
    }

    const job = await JobModel.findById(jobId);

    if (!job) {
      throw new Error("Job not found!");
    }

    res.status(200).json({
      success: true,
      message: "ok",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

export const createJob = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = validateJob(req.body);

    const job = await JobModel.create(body);

    if (!job) {
      throw new Error("Failed to create job!");
    }

    res.status(201).json({
      success: true,
      message: "Job created successfully!",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobId = req.params.jobId;
    const body = validateJob(req.body);

    if (!jobId) {
      throw new Error("Job Id is required!");
    }

    const job = await JobModel.findByIdAndUpdate(jobId, body, { new: true });

    if (!job) {
      throw new Error("Job not found!");
    }

    res.status(200).json({
      success: true,
      message: "Job updated successfully!",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteJob = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobId = req.params.jobId;

    if (!jobId) {
      throw new Error("Job Id is required!");
    }

    const job = await JobModel.findByIdAndDelete(jobId);

    if (!job) {
      throw new Error("Job not found!");
    }

    res.status(200).json({
      success: true,
      message: "Job deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};
