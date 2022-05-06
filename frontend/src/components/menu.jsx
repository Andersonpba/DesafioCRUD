import { Link } from "react-router-dom";

import "../styles/components/menu.css";

export default function Menu() {

  return (
    <ul>
      <li>
        <Link className="text" to="/crear">CREAR</Link>
      </li>
      <li>
        <Link className="text" to="/listar">LISTAR</Link>
      </li>
      <li>
        <Link className="text" to="/editar">EDITAR</Link>
      </li>
      <li>
        <Link className="text" to="/deletar">DELETAR</Link>
      </li>
    </ul>
  )
}