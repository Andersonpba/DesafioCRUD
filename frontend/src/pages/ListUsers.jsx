import { useEffect, useState } from "react";

import api from "../services/api";

import Menu from "../components/menu";
import Logo from "../components/logo";


export default function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/user").then(response => {
      setUsers(response.data);
    });
  }, []);

  return(
    <div>
      <header>
        <Menu />
        <Logo />
      </header>

      <main>
        <h2>
          LISTAR
        </h2>
        <h1>
          USUARIO
        </h1>
        <table>
          <thead>
            <tr>
              <th className="column-1">N° CEDULA</th>
              <th className="column-2">NOMBRE</th>
              <th className="column-3">APELLIDO</th>
              <th className="column-4">DIRECCION</th>
              <th className="column-5">TELEFONO</th>
              <th className="column-6">FECHA DE NACIMIENTO</th>
            </tr>
          </thead>
          <tbody>
            {users.map(usuario => {
              return(
                <tr key={usuario.ci}>
                  <td className="column-1">{usuario.ci}</td>
                  <td className="column-2">{usuario.nombre}</td>
                  <td className="column-3">{usuario.apellido}</td>
                  <td className="column-4">{usuario.direccion}</td>
                  <td className="column-5">{usuario.telefono}</td>
                  <td className="column-6">{usuario.fecha_nacimiento.replace('T00:00:00.000Z', '')}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
        
      </main>
    </div>
  )
}