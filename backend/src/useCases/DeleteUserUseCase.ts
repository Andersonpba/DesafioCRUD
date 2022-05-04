import { inject, injectable } from "tsyringe";
import { AppError } from "../errors/AppError";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";


@injectable()
class DeleteUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository
  ) {}

  async execute(ci: number): Promise<void> {
    const user = await this.usersRepository.findByCI(ci);

    if(!user) {
      throw new AppError("Usuario no existe");
    }

    await this.usersRepository.delete(ci);
  }
}

export { DeleteUserUseCase };
