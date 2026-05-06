import * as projectService from '../services/project.service.js';

export const getAllProjects = async (req, res) => {
  const projects = await projectService.getAllProjects();
  res.json(projects);
};

export const getProjectById = async (req, res) => {
  const { id } = req.params;
  const project = await projectService.getProjectById(id);
  res.json(project);
};