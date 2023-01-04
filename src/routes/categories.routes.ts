import { Router } from 'express';
import multer from 'multer';
import { createCategoryController } from '../modules/cars/UseCases/createCategory';
import { importCategoryController } from '../modules/cars/UseCases/importCategory';
import { listCategoriesController } from '../modules/cars/UseCases/listCategories';


const categoriesRoutes = Router();

//Criando Middleware do Multer, para utilizar na rota de import 
const upload = multer({
  dest: './tmp',
})

categoriesRoutes.post('/', async (req, res) => {
  return createCategoryController.handle(req,res);
});

categoriesRoutes.get('/', async (req, res) => {
  return listCategoriesController.handle(req, res);
})

//Implementando Multer
categoriesRoutes.post('/import', upload.single('file'), async (req, res) => {
  return importCategoryController.handle(req, res);
})



export { categoriesRoutes };

