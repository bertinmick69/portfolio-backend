import { Router } from 'express';
import { sendContact } from '../controllers/contact.controller.js';
import { validateContact } from '../validators/contact.validator.js';
import validate from '../middlewares/validation.middleware.js';

const router = Router();

router.post('/', validateContact, validate, sendContact);

export default router;
