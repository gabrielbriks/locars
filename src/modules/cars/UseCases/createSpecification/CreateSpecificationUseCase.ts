import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: SpecificationsRepository){}

  execute({name, description}) {
      
    const specificationRepository = this.specificationRepository;

    const specificationAlreadyExists = specificationRepository.findByName(name);
    
    if (specificationAlreadyExists) {
      throw new Error('Specification already exists.');
    }
    
    specificationRepository.create({name, description});
    
  }
}