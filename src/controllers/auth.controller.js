// import { loginUser } from '../services/auth.service.js';

// export const login = async (req, res, next) => {
//   const { email, password } = req.body;

//   const { token } = await loginUser({ email, password });

//   res.json({ token });
// };

import { loginUser } from '../services/auth.service.js';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { token, user } = await loginUser({ email, password });

    res.status(200).json({ 
      token,
      user // Optionnel : il est souvent utile de renvoyer les infos de base de l'user
    });
  } catch (error) {
    next(error); // Indispensable pour que ton middleware d'erreur attrape les mauvais identifiants
  }
};