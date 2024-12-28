import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  category: z.string().min(1, { message: "Surname is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  salary: z.string().min(1, { message: "Salary is required" }),

    companyName: z.string().min(1, { message: "Company name is required" }),
    companyDescription: z
      .string()
      .min(1, { message: "Company description is required" }),
    contactEmail: z.string().min(1, { message: "Contact email is required" }),
    contactPhone: z.string().min(1, { message: "Contact phone is required" }),

});
