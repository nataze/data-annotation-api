import { z } from 'zod';

export const imageSchema = z.object({
  params: z.object({
    projectId: z.string().length(24)
  }),
  body: z.object({
    uri: z.string().url(),
    width: z.number().positive(),
    height: z.number().positive()
  })
});

export type CreateImageParams = z.infer<typeof imageSchema>['params'];
export type CreateImageBody = z.infer<typeof imageSchema>['body'];