import { Category } from "../../model/category";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

export class ListCategoriesUseCase {
  
  constructor(private categoriesRepository: CategoriesRepository){}
  
  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    
    return categories;
  }
}