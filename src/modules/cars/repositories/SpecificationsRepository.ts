import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName({ name }: ICreateSpecificationDTO): Specification {
    const specification = this.specifications.find(s => s.name === name);

    return specification;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    
    Object.assign(specification,{
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
    
  }

}