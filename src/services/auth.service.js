import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findByEmail } from '../models/user.model.js';
import AppError from '../errors/AppError.js';

export const loginUser = async ({ email, password }) => {
  const user = await findByEmail(email);
  if (!user) {
    throw new AppError('Email ou mot de passe incorrect', 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError('Email ou mot de passe incorrect', 401);
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  };
};
