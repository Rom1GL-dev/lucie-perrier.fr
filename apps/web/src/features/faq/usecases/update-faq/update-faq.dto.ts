import { z } from 'zod';

export const UpdateFaqFormSchema = z.object({
  id: z.string(),
  answer: z.string().optional(),
  response: z.string().optional()
});

export type UpdateFaqForm = z.infer<typeof UpdateFaqFormSchema>;
