import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("usuarios")
class User {
  @PrimaryColumn()
  ci: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  direccion: string;

  @Column()
  fecha_nacimiento: string;

  @Column()
  telefono: string;
}

export { User };
