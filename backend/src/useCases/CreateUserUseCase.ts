import { inject, injectable } from "tsyringe";
import { AppError } from "../errors/AppError";
import { IUserDTO, IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";

@injectable()
class CreateUserUseCase {
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
  }: IUserDTO): Promise<void>{
    const data = {
      ci,
      nombre,
      apellido,
      direccion,
      fecha_nacimiento,
      telefono
    }

    const userAlreadyExists = await this.usersRepository.findByCI(data.ci)
    
    if(userAlreadyExists) {
      throw new AppError("Usuario ya existe");
    }

    await this.usersRepository.create(data);
  }
}

export { CreateUserUseCase };