import * as projectModel from '../models/project.model.js';

export const getAllProjects = async () => {
  return await projectModel.findAll();
};
