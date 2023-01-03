import { CategoriesRepository } from "../../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}



export class CreateCategoryUseCase {

  constructor(private categoriesRepository: CategoriesRepository){}
  
  execute({name, description}:IRequest) {
    const categoryRepository = this.categoriesRepository;

    const categoryAlreadyExists = categoryRepository.findByName(name);
    
    if (categoryAlreadyExists) {
      throw new Error('Category already exists.');
    }
    
    categoryRepository.create({name,description});
  }
}