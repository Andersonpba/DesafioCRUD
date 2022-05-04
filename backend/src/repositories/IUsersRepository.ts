import { User } from "../entities/User";


interface IUserDTO {
  ci: number;
  nombre: string;
  apellido: string;
  direccion: string;
  fecha_nacimiento: string;
  telefono: string;
}

interface IUsersRepository {
  create(data: IUserDTO): Promise<void>;
  read(): Promise<User[]>;
  update(data: IUserDTO): Promise<User>;
  delete(ci: number): Promise<void>;
  findByCI(ci: number): Promise<User>;
}

export { IUsersRepository, IUserDTO };