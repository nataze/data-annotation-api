import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';

export const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);
app.get('/health', (_req, res) => res.send('OK'));
app.use(errorHandler);