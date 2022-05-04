import { useState } from "react";

import api from "../services/api";

import Menu from "../components/menu";
import Logo from "../components/logo";


export default function DeleteUser() {
  const [ci, setCi] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    
    await api.delete('/user', {
      data: {
        ci: ci,
      }
      
    });

    alert("¡Usuario deletado exitosamente!")
  }

  return (
    <div id="">
      <header>
        <Menu />
        <Logo />
      </header>
      

      <main>
        <form onSubmit={handleSubmit} >
          <fieldset>
            <h2>
              DELETAR
            </h2>
            <h1>
              USUARIO
            </h1>

            <div className="input-block">
            <label htmlFor="ci">N° CEDULA DE IDENTIDAD</label>
                <input
                  id="ci"
                  value={ci}
                  onChange={event => setCi(event.target.value)}
                /> 
            </div>
          </fieldset>
          
          <button className="confirm-button" type="submit">
            DELETAR
          </button>
        </form>
      </main>
    </div>
  )
}