import { findAll } from '../models/project.model.js';

export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await findAll();
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

