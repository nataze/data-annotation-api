import { z } from 'zod';

const bboxSchema = z.object({
  x: z.number(),
  y: z.number(),
  width: z.number().positive(),
  height: z.number().positive()
});

export const annotationSchema = z.object({
  params: z.object({
    imageId: z.string().length(24)
  }),
  body: z.object({
    annotator: z.string(),
    label: z.string(),
    mask: z.array(z.array(z.tuple([z.number(), z.number()]))),
    bbox: bboxSchema,
    metadata: z.record(z.any()).optional()
  })
});

export type CreateAnnotationParams = z.infer<typeof annotationSchema>['params'];
export type CreateAnnotationBody = z.infer<typeof annotationSchema>['body'];