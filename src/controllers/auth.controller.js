// src/controllers/auth.controller.js
import { loginUser } from '../services/auth.service.js';


export  const login = async (req, res, next) => {
  const { email, password } = req.body;

  const token = await loginUser({ email, password });

  return res.json({ token });
}