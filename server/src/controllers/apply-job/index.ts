import { NextFunction, Request, Response } from "express";

import ApplicantModel from "../../models/applicant";
import { validateApplicant } from "../../validations/applicant";

export const applyJob = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = validateApplicant(req.body);

    const exisitingApplicant = await ApplicantModel.findOne({
      user: body.user,
      job: body.job,
    });

    if (exisitingApplicant) {
      throw new Error("You have already applied for this job.");
    }

    const newApplicant = await ApplicantModel.create(body);

    res.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      data: newApplicant,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllAppliedJobs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await ApplicantModel.find().exec();

    res.status(200).json({
      success: true,
      message: "ok",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllAppliedUserJobs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      throw new Error("User ID is required.");
    }

    const data = await ApplicantModel.find({ user: userId });

    res.status(200).json({
      success: true,
      message: "ok",
      data,
    });
  } catch (error) {
    next(error);
  }
};
