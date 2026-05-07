import { body, param } from "express-validator";
export const validateContact = [
body("name")
.notEmpty().withMessage("Le nom est requis")
.isLength({ min: 2 }).withMessage("Le nom doit faire au moins 2 caractères")
.isLength({ max: 100 }).withMessage("Le nom ne peut pas dépasser 100 caractères"),
body("email")
.notEmpty().withMessage("L'email est requis")
.isEmail().withMessage("L'email doit être valide"),
body("message")
.notEmpty().withMessage("Le message est requis")
.isLength({ min: 10 }).withMessage("Le message doit faire au moins 10 caractères")
.isLength({ max: 500 }).withMessage("Le message ne peut pas dépasser 500 caractères"),
];