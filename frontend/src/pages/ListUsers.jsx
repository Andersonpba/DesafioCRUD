import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

import api from "../services/api";

import Menu from "../components/menu";
import Logo from "../components/logo";
import { Link } from "react-router-dom";


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
              <th>N° CEDULA</th>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
              <th>DIRECCION</th>
              <th>TELEFONO</th>
              <th>FECHA DE NACIMIENTO</th>
              <th>EDITAR USUARIO</th>
            </tr>
          </thead>
          <tbody>
            {users.map(usuario => {
              return(
                <tr key={usuario.ci}>
                  <td>{usuario.ci}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.direccion}</td>
                  <td>{usuario.telefono}</td>
                  <td>{usuario.fecha_nacimiento.replace('T00:00:00.000Z', '')}</td>
                  <td><Link to={{pathname: "/editar", state: usuario}}><Icon className="update-icon" icon="jam:write" /></Link></td>
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