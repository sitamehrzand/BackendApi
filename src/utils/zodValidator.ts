import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body); // Validate and override req.body with parsed data
      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      res.status(400).json(error); // Send validation error
    }
  };
