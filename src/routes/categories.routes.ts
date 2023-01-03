import { Router } from 'express';
import { createCategoryController } from '../modules/cars/UseCases/createCategory';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';


const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.post('/', async (req, res) => {
  return createCategoryController.handle(req,res);
});

categoriesRoutes.get('/', async (req, res) => {

  const all = await categoryRepository.list();

  return res.json(all);
})





export { categoriesRoutes };

