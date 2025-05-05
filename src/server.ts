import dotenv from 'dotenv';
import connectDB from './config/db';
import { app } from './app';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => console.log(`Listening on ${port}`));
  })
  .catch(err => {
    console.error('DB connection failed', err);
    process.exit(1);
  });