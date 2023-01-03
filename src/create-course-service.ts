interface RequestProps {
  name: string;
  duration: number;
  educator: string;
}

export class CreateCourseService {
  execute({name, duration, educator}: RequestProps){
    console.log(name, duration, educator);
  }
}