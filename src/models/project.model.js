import pool from '../config/db.js';

export const findAll = async () => {
  const query = 'SELECT * FROM projects ORDER BY created_at DESC';
  const [rows] = await pool.execute(query);
  return rows;
};

export const findById = async (id) => {
  const query = 'SELECT * FROM projects WHERE id = ?';
  const [rows] = await pool.execute(query, [id]);
  if (rows.length === 0) {
    return null;
  }
  return rows[0]; 
}