import { inject, injectable } from "tsyringe";
import { User } from "../entities/User";
import { AppError } from "../errors/AppError";
import { IUserDTO, IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";


@injectable()
class UpdateUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    ci,
    nombre,
    apellido,
    direccion,
    fecha_nacimiento,
    telefono
  }: IUserDTO): Promise<User> {
    const user = await this.usersRepository.findByCI(ci)
  
    if(!user) {
      throw new AppError("Usuario no existe");
    }

    const updatedUser = await this.usersRepository.update({
      ci,
      nombre,
      apellido,
      direccion,
      fecha_nacimiento,
      telefono
    });

    return updatedUser;
  }
}

export { UpdateUserUseCase };
