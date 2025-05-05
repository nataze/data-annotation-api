import { Router } from 'express';
import projectRoutes from './v1/projectRoutes';
import imageRoutes from './v1/imageRoutes';
import annotationRoutes from './v1/annotationRoutes';

const router = Router();
router.use('/projects', projectRoutes);
router.use('/projects/:projectId/images', imageRoutes);
router.use('/images/:imageId/annotations', annotationRoutes);

export default router;