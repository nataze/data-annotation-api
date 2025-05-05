import { Annotation } from '../models/Annotation';
import { CreateAnnotationParams, CreateAnnotationBody } from '../schemas/annotationSchema';

export const annotationService = {
  create: ({ params, body }: { params: CreateAnnotationParams; body: CreateAnnotationBody }) =>
    Annotation.create({ image: params.imageId, ...body }),

  getById: (id: string) => Annotation.findById(id),

  query: (filter: Partial<{ label: string; annotator: string }>) =>
    Annotation.find(filter).sort({ createdAt: -1 }).lean(),

  rank: async (id: string) => {
    const target = await Annotation.findById(id);
    if (!target) return null;
    const count = await Annotation.countDocuments({
      image: target.image,
      area: { $gt: target.area }
    });
    return count + 1;
  }
};