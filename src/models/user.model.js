
import pool from '../config/db.js'; 


export const findByEmail = async (email) => {
  try {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await pool.execute(query, [email]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    throw error; 
  }
};