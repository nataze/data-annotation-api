import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';
import { ApiError } from './errorHandler';

export const validate = (schema: AnyZodObject) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    schema.parse({
      params: req.params,
      query: req.query,
      body: req.body,
    });
    next();
  } catch (e: any) {
    next(new ApiError(400, e.errors));
  }
};