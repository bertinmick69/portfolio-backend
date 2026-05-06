import {getAllProjects} from '../services/project.service.js';

export const fetchAllProjects = async (req, res, next) => {
  
    await getAllProjects(req, res, next);
 
    next(error);
  
};  