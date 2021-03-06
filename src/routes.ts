import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function CreateCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJs",
    duration: 10,
    educator: "dani",
  });

  return response.send();
}
