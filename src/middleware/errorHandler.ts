import { Request, Response} from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
) => {
  console.error(err.stack); // Log the error
  res.status(500).json({ error: 'Something went wrong!' });
};
