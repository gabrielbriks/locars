import { Router } from 'express';
import { createSpecificationUseCase } from '../modules/cars/UseCases/createSpecification';
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';


const specificationsRoutes = Router();
const specificationRepository = SpecificationsRepository.getIntance();


specificationsRoutes.post('/', async (req, res) => {
  const  { name, description  } = req.body;

  const createSpecificationService = createSpecificationUseCase;
  createSpecificationService.execute({name, description});
  
  return res.status(201).send();
});

specificationsRoutes.get('/', async (req, res) => {

  const all = await specificationRepository.list();

  return res.json(all);
})





export { specificationsRoutes };

