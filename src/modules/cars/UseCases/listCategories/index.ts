import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository  = CategoriesRepository.getInstance();
export const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);
export const listCategoriesController = new ListCategoriesController(listCategoryUseCase); 