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

export const createProject = async ( req, res) => {
  const { title, description, tech_stack, github_url, demo_url, image_url } = req.body;
  const project = await projectService.createProject({ title, description, tech_stack, github_url, demo_url, image_url });
  res.status(201).json(project);
}
