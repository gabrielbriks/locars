export class ImportCategoryUseCase {
  constructor(){}

  execute(file: Express.Multer.File): void {
    console.log(file);
  }
}