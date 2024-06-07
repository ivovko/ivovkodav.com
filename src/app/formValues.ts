import { z } from "zod";

export const FormValues = z.object({
  name: z.string().optional(),
  company: z.string().optional(),
  position: z.string().optional(),
  content: z.string(),
});
