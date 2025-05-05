import { Image } from '../models/Image';
import { CreateImageParams, CreateImageBody } from '../schemas/imageSchema';

export const imageService = {
  create: ({ params, body }: { params: CreateImageParams; body: CreateImageBody }) =>
    Image.create({ project: params.projectId, ...body }),
};