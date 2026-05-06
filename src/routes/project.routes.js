import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/authorize.middleware.js';
import { validateProject } from '../validators/project.validator.js';
import validate from '../middlewares/validation.middleware.js';
import { getAllProjects, getProjectById, create,update,deleteProject } from '../controllers/project.controller.js';

const router = Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', authenticate, authorize('admin'), validateProject, validate, create);
router.put('/:id', authenticate, authorize('admin'), validateProject, validate, update);
router.delete('/:id', authenticate, authorize('admin'), deleteProject);
export default router;
