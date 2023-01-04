
import { parse as csvParse } from 'csv-parse';
import fs from 'fs';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';


interface IImportCategory {
    name: string;
    description: string;
}
export class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository){}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {

    return new Promise((resolve, reject) => {
      /**Conceito básico de stream
      * Lê ou disponibiliza um conteúdo em partes de forma progressiva, com um video
      */
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = []

      const parseFile = csvParse();

      /** pipe()
      * Pega o que esta sendo lido dentro do stream e nos disponibiliza para manipularmos
      */
      stream.pipe(parseFile);

      parseFile.on("data", async (line)=> {
        const [name, description] = line;

        categories.push({
          name,
          description
        });
      })
      .on("end", () => {
        resolve(categories)
      })
      .on("error", (err) => {
        reject(err)
      })
    });

  }
 
   async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    console.log(categories);
  }
}