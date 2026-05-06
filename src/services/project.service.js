import AppError from '../errors/AppError.js';
import * as projectModel from '../models/project.model.js';

export const getAllProjects = async () => {
  return await projectModel.findAll();
};

export const getProjectById = async (id) => {
  const project = await projectModel.findById(id);
  if (!project) {
    throw new AppError('project introuvable',404);
  }
  return project;
}; 

export const create = async (data) => {
  const project = await projectModel.create(data);
  if (!project) {
    throw new AppError('Erreur lors de la création du projet', 500);
  }
  return project;
};



export const update = async (id, data) => {

  const updatedProject = await projectModel.findById(id);
  if (!updatedProject) {
    throw new AppError('Erreur lors de la mise à jour du projet', 404);
  }

  const updated = await projectModel.update(id, data);
  
  return updated;
};