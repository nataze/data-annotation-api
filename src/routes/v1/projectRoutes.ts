import { Router } from 'express';
import { createProject } from '../../controllers/projectController';
import { validate } from '../../middleware/validate';
import { projectSchema } from '../../schemas/projectSchema';

const router = Router();
router.post('/', validate(projectSchema), createProject);
export default router;