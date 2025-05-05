import { z } from 'zod';

export const projectSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string().optional()
  })
});

export type CreateProjectInput = z.infer<typeof projectSchema>['body'];