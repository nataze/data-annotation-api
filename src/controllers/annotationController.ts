import { Request, Response, NextFunction } from 'express';
import { annotationService } from '../services/annotationService';
import {
  CreateAnnotationParams,
  CreateAnnotationBody,
} from '../schemas/annotationSchema';

export const createAnnotation = async (
  req: Request<CreateAnnotationParams, unknown, CreateAnnotationBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const annotation = await annotationService.create({ params: req.params, body: req.body });

    res.status(201).json(annotation);
  } catch (err) {
    next(err);
  }
};

export const getAnnotation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const annotation = await annotationService.getById(req.params.id);
    if (!annotation) return res.status(404).end();

    res.json(annotation);
  } catch (err) {
    next(err);
  }
};

export const listAnnotations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const results = await annotationService.query(req.query as any);
    
    res.json(results);
  } catch (err) {
    next(err);
  }
};

export const getAnnotationRank = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rank = await annotationService.rank(req.params.id);
    if (rank === null) return res.status(404).end();

    res.json({ rank });
  } catch (err) {
    next(err);
  }
};