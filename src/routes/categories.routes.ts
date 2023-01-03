import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';


const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository;


categoriesRoutes.post('/', async (req, res) => {
  const  { name, description  } = req.body;

  const categoryAlreadyExists = categoryRepository.findByName(name);
  
  if (categoryAlreadyExists) {
    return res.status(400).json({error: 'Category already exists.'})
  }
  
  categoryRepository.create({name,description});

  return res.status(201).send();
});

categoriesRoutes.get('/', async (req, res) => {

  const all = await categoryRepository.list();

  return res.json(all);
})





export { categoriesRoutes };

