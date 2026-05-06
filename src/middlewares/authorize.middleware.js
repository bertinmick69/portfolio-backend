import AppError from '../errors/AppError.js';

export const authorize = (...roles) => {
  return (req, res, next) => {
    // req.user est défini par le middleware authenticate
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new AppError('Accès refusé', 403));
    }
    next();
  };
};
