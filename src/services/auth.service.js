// src/controllers/auth.controller.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findByEmail } from '../models/user.model.js';
 
export async function login(req, res) {
  const { email, password } = req.body;

  try {
  
    const user = await findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

   
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.json({
      message: 'Connexion réussie',
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });

  } catch (error) {
    console.error('Erreur login:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
}