import AppError from '../errors/AppError.js';

const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  console.error('ERROR 💥:', err);

  res.status(500).json({
    status: 'error',
    message: 'Quelque chose s\'est mal passé !',
  });
};

export default errorHandler;
