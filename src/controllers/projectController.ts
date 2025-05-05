import { Request, Response, NextFunction } from 'express';
import { projectService } from '../services/projectService';

export const createProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const proj = await projectService.create(req.body);
    
    res.status(201).json(proj);
  } catch (err) {
    next(err);
  }
};