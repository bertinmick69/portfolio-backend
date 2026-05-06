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

export const create = async (req, res) => {
  const {title,description,tech_stack,github_url,demo_url,image_url } = req.body;
  
  const project = await projectService.create({ 
    title,description,tech_stack,github_url,demo_url,image_url 
  });

  res.status(201).json(project);
};

export const update = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  const project = await projectService.update(id, data);

  res.json(project);
};