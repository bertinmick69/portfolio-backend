import { body, param } from "express-validator";

export const validateProjectbody = [
body("title")
.notEmpty().withMessage("Le titre est requis")
.isLength({ min: 2 }).withMessage("Le titre doit faire au moins 2 caractères")
.isLength({ max: 150 }).withMessage("Le titre ne peut pas dépasser 150 caractères"),
body("description")
.isLength({ max: 200 }).withMessage("La description ne peut pas dépasser 200 caractères"),
body("tech_stack")
.isArray({ max: 255 }).withMessage("Les technologies ne peuvent pas dépasser 255 caractères"),
body("github_Url")
.isURL().withMessage("L'URL GitHub doit être valide"),
body("demo_Url")
.isURL().withMessage("L'URL du projet en ligne doit être valide"),  
body("image_Url")
.isURL().withMessage("L'URL de l'image doit être valide"),

];