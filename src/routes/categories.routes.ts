import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';


const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository;


categoriesRoutes.post('/', async (req, res) => {
  const  { name, description  } = req.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);
  createCategoryService.execute({name, description});
  
  return res.status(201).send();
});

categoriesRoutes.get('/', async (req, res) => {

  const all = await categoryRepository.list();

  return res.json(all);
})





export { categoriesRoutes };

