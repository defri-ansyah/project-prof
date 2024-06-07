import express, { Request, Response, NextFunction } from 'express';
import userRoutes from './routes/UserRoutes';
import logger from './utils/Logger';

const app = express();

// Middleware untuk log permintaan (opsional)
app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(`Received ${req.method} request for ${req.url}`);
    next();
});

// Middleware untuk parsing JSON
app.use(express.json());

// Definisikan rute
app.use('/api/users', userRoutes);

// Middleware untuk menangani kesalahan (error handling)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(`Error occurred: ${err.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
});

export default app;
