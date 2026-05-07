
import { loginUser } from '../services/auth.service.js';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { token, user } = await loginUser({ email, password });

    res.status(200).json({ 
      token,
      user
    });
  } catch (error) {
    next(error); 
  }
};