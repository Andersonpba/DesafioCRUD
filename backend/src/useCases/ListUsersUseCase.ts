import { inject, injectable } from "tsyringe";
import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";


@injectable()
class ListUsersUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository
  ) {}
  
  async execute(): Promise<User[]> {
    const users = await this.usersRepository.read();

    return users;
  }
}

export { ListUsersUseCase };
