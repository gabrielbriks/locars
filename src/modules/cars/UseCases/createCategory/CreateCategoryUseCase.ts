import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}



export class CreateCategoryUseCase {

  constructor(private categoriesRepository: CategoriesRepository){}
  
  execute({name, description}:IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    
    if (categoryAlreadyExists) {
      throw new Error('Category already exists.');
    }
    
    this.categoriesRepository.create({name,description});
  }
}