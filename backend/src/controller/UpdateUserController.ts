import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "../useCases/UpdateUserUseCase";


class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ci, nombre, apellido, direccion, fecha_nacimiento, telefono } = request.body;
  
    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const updateUser = await updateUserUseCase.execute({
      ci,
      nombre,
      apellido,
      direccion,
      fecha_nacimiento,
      telefono
    });

    return response.status(202).json(updateUser);
  }
}

export { UpdateUserController };
