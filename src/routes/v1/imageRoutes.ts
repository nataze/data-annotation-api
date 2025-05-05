import { Router } from 'express';
import { createImage } from '../../controllers/imageController';
import { validate } from '../../middleware/validate';
import { imageSchema } from '../../schemas/imageSchema';

const router = Router({ mergeParams: true });

router.post('/', validate(imageSchema), createImage);
export default router;