import { Router } from 'express';
import { createCategoryController } from '../modules/cars/UseCases/createCategory';
import { listCategoriesController } from '../modules/cars/UseCases/listCategories';


const categoriesRoutes = Router();

categoriesRoutes.post('/', async (req, res) => {
  return createCategoryController.handle(req,res);
});

categoriesRoutes.get('/', async (req, res) => {
  return listCategoriesController.handle(req, res);
})





export { categoriesRoutes };

