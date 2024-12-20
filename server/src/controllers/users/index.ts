import { Request, Response, NextFunction } from "express";
import UserModel from "../../models/user";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const skip = (page - 1) * limit;

    const users = await UserModel.find().skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      message: "ok",
      data: users,
      pagination: {
        page,
        limit,
        totalPages: Math.ceil(
          (await UserModel.countDocuments().exec()) / limit
        ),
      },
    });
  } catch (error) {
    next(error);
  }
};
