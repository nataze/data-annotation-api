import { Request, Response, NextFunction } from 'express';
import { imageService } from '../services/imageService';
import { CreateImageParams, CreateImageBody } from '../schemas/imageSchema';

export const createImage = async (
  req: Request<CreateImageParams, unknown, CreateImageBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const img = await imageService.create({ params: req.params, body: req.body });
    
    res.status(201).json(img);
  } catch (err) {
    next(err);
  }
};