import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
