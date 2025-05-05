import { Router } from 'express';
import {
  createAnnotation,
  getAnnotation,
  listAnnotations,
  getAnnotationRank,
} from '../../controllers/annotationController';
import { validate } from '../../middleware/validate';
import { annotationSchema } from '../../schemas/annotationSchema';

const router = Router({ mergeParams: true });

router.post('/', validate(annotationSchema), createAnnotation);
router.get('/:id', getAnnotation);
router.get('/', listAnnotations);
router.get('/:id/rank', getAnnotationRank);
export default router;