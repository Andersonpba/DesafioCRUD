import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1651284174905 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns: [
                    {
                        name: "ci",
                        type: "integer",
                        isPrimary: true,
                        isUnique: true,
                    },
                    {
                        name: "nombre",
                        type: "varchar",
                    },
                    {
                        name: "apellido",
                        type: "varchar",
                    },
                    {
                        name: "direccion",
                        type: "varchar",
                    },
                    {
                        name: "fecha_nacimiento",
                        type: "date",
                    },
                    {
                        name: "telefono",
                        type: "varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }
}
