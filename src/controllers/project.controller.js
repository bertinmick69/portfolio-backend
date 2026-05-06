import * as projectService from '../services/project.service.js';

export const getAllProjects = async (req, res) => {
  const projects = await projectService.getAllProjects();
  res.json(projects);
};
