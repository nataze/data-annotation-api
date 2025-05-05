import { Request, Response, NextFunction } from 'express';

export class ApiError extends Error {
  status: number;
  details?: any;

  constructor(status: number, message: any) {
    super(typeof message === 'string' ? message : 'Error');
    this.status = status;
    this.details = message;
  }
}

export const errorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.message, details: err.details });
};