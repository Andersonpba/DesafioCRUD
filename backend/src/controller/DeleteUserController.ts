import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "../useCases/DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ci } = request.body;

    const deleteUserUseCase = container.resolve(DeleteUserUseCase);

    await deleteUserUseCase.execute(ci);

    return response.status(204).send();
  }
}

export { DeleteUserController };
