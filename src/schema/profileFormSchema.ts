import { z } from "zod";

const formSchema = z.object({
  full_Name: z.string().min(6, {
    message: "Username must be at least 5 characters.",
  }),
  email: z.string().email(),
  phone_Number: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Invalid phone number format",
  }),
  designation: z.string().min(6, {
    message: "Designation must be at least 5 characters.",
  }),
  organization: z.string().min(6, {
    message: "Organization must be at least 5 characters.",
  }),
});

export {formSchema}