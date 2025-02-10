import { Router } from 'express';
import { z } from 'zod';
import { validate } from '../utils/zodValidator';
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

// Validation schemas
const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
});

// Routes
router.get('/', getAllUsers); // Get all users
router.post('/', validate(createUserSchema), createUser); // Create a user
router.put('/:id', validate(updateUserSchema), updateUser); // Update a user
router.delete('/:id', deleteUser); // Delete a user

export default router;
