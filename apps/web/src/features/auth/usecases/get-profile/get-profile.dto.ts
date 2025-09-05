import z from 'zod';

export const GetProfileResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: z.string()
});

export type GetProfileResponseDto = z.infer<typeof GetProfileResponseSchema>;
