import { Router } from 'express';
import { randomUUID } from 'node:crypto';
const categoriesRoutes = Router();

const categories = []

categoriesRoutes.post('/', async (req, res) => {
  const  { name, description  } = req.body;
  const id = randomUUID()

  await categories.push({id, name, description });

  return res.status(201).json(categories)
})

  export { categoriesRoutes };

