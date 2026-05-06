import pool from '../config/db.js';

export const findAll = async () => {
  const query = 'SELECT * FROM projects ORDER BY created_at DESC';
  const [rows] = await pool.execute(query);
  return rows;
};
