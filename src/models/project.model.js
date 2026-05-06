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

export const create= async ({title, description, tech_stack, github_url, demo_url, image_url })=>{
    const query = 'INSERT INTO projects (title, description, tech_stack, github_url, demo_url, image_url) VALUES (?, ?, ?, ?, ?, ?)';
    const [rows] = await pool(query, [title, description, tech_stack, github_url, demo_url, image_url]);
    return rows;    
}