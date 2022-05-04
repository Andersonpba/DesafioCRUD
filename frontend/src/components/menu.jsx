import { Link } from "react-router-dom";

import "../styles/components/menu.css";

export default function Menu() {

  return (
    <ul>
      <li>
        <Link className="text" onClick={() => window.location.href="/crear"}>CREAR</Link>
      </li>
      <li>
        <Link className="text" onClick={() => {window.location.href="/listar"}}>LISTAR</Link>
      </li>
      <li>
        <Link className="text" onClick={() => {window.location.href="/actualizar"}}>ACTUALIZAR</Link>
      </li>
      <li>
        <Link className="text" onClick={() => window.location.href="/deletar"}>DELETAR</Link>
      </li>
    </ul>
  )
}