import { body } from 'express-validator';
 
export const validateAuth = [
  body('email').notEmpty().isEmail().withMessage('Email invalide'),
  body('password').notEmpty().withMessage('Mot de passe requis'),
];
