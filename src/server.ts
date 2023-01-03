import express from 'express';
import { createCourse } from './routes';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.router';

const app = express();
app.use(express.json());


app.get('/', createCourse);

app.use('/categories',categoriesRoutes);
app.use('/specifications',specificationsRoutes);

app.listen(3333);