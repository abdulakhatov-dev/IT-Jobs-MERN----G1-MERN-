import { z } from "zod";

export const validateApplicant = (data: any) => {
  const schema = z.object({
    user: z.string({ required_error: "User Id is required" }),
    job: z.string({ required_error: "Job Id is required" }),
    notes: z.string({ required_error: "Notes are required" }),
    resumeUrl: z.string({ required_error: "Resume URL is required" }),
  });

  return schema.parse(data);
};
