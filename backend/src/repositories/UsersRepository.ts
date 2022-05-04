import { getRepository, Repository } from "typeorm";

import { IUserDTO, IUsersRepository } from "./IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    ci,
    nombre,
    apellido,
    direccion,
    fecha_nacimiento,
    telefono
  }: IUserDTO): Promise<void> {
    const user = this.repository.create({
      ci,
      nombre,
      apellido,
      direccion,
      fecha_nacimiento,
      telefono
    });

    await this.repository.save(user);
  }
  
  async read(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async update(data: IUserDTO): Promise<User> {
    await this.repository.delete(data.ci);

    const user = this.repository.create(data);

    await this.repository.save(user);

    return user;
  }

  async delete(ci: number): Promise<void> {
    await this.repository.delete(ci);
  }

  async findByCI(ci: number): Promise<User> {
    const user = await this.repository.findOne(ci);
    return user;
  }
}
export { UsersRepository };