import { Project } from '../models/Project';
import { CreateProjectInput } from '../schemas/projectSchema';

export const projectService = {
  create: (input: CreateProjectInput) => Project.create(input),
};