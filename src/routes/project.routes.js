import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/authorize.middleware.js';
import { validateProject } from '../validators/project.validator.js';
import validate from '../middlewares/validation.middleware.js';
import { getAllProjects, getProjectById, create } from '../controllers/project.controller.js';

const router = Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', authenticate, authorize('admin'), validateProject, validate, create);

export default router;
