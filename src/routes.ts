import { Request, Response } from "express";
import { CreateCourseService } from "./create-course-service";



export function createCourse(req: Request, res: Response) {
  // const {  }  = req.body
  
  const service = new CreateCourseService()
  service.execute({
    name: 'NodeJS', duration:5, educator: 'Gabriel'
  });

  return res.send();

  
}