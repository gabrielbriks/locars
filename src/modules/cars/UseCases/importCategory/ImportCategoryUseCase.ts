
import { parse as csvParse } from 'csv-parse';
import fs from 'fs';
export class ImportCategoryUseCase {
  constructor(){}

  execute(file: Express.Multer.File): void {
    /**Conceito básico de stream
     * Lê ou disponibiliza um conteúdo em partes de forma progressiva, com um video
     */
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    /** pipe()
     * Pega o que esta sendo lido dentro do stream e nos disponibiliza para manipularmos
     */
    stream.pipe(parseFile);

    parseFile.on("data", async (line)=> {
      console.log(line);
    })
  }
}