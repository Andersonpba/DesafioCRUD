import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ci, nombre, apellido, direccion, fecha_nacimiento, telefono } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      ci,
      nombre,
      apellido,
      direccion,
      fecha_nacimiento,
      telefono
    });

    return response.status(201).send();
  }
}

export { CreateUserController };