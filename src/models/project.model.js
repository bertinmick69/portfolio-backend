import pool from '../config/db.js';

export const findAll = async () => {
  const [rows] = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
  return rows;
};


export const findById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM projects WHERE id = ?', [id]);
  return rows.length > 0 ? rows[0] : null;
};

export const create = async ({ title, description, tech_stack, github_url, demo_url, image_url }) => {
  const query = 'INSERT INTO projects (title, description, tech_stack, github_url, demo_url, image_url) VALUES (?, ?, ?, ?, ?, ?)';
  const [result] = await pool.query(query, [title, description, tech_stack, github_url, demo_url, image_url]);
  
  return await findById(result.insertId);
};







