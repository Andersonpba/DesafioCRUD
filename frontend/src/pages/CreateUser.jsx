import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import api from "../services/api";

import Menu from "../components/menu";
import Logo from "../components/logo";


export default function CreateUser() {
  const [ci, setCi] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nacimiento, setNacimiento] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if(ci === '' || nombre === '' || apellido === '' || direccion === '' || telefono === ''|| nacimiento === ''){
      return alert("Campo invalido");
    }
    
    await api.post('/user', {
      ci: ci,
      nombre: nombre,
      apellido: apellido,
      direccion: direccion,
      telefono: telefono,
      fecha_nacimiento: nacimiento,
    });

    alert("¡Usuario cadastrado exitosamente!")
    setCi('');
    setNombre('');
    setApellido('');
    setDireccion('');
    setTelefono('');
    setNacimiento('');
  }

  return (
    <div>
      <header>
          <Menu />
          <Logo />
      </header>
      
      <main>
        <form onSubmit={handleSubmit} className="">
          <fieldset>
            <h2>
              CREAR
            </h2>
            <h1>
              USUARIO
            </h1>
            <div className="block-separator" >
              <div className="block1">
                <div className="input-block">
                  <label htmlFor="ci">N° CEDULA DE<br/>IDENTIDAD</label>
                  <input
                    id="ci"
                    value={ci}
                    onChange={event => setCi(event.target.value)}
                    type="number"
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="nombre">NOMBRE</label>
                  <input
                    id="nombre"
                    value={nombre}
                    onChange={event => setNombre(event.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="apellido">APELLIDO</label>
                  <input
                    id="apellido"
                    value={apellido}
                    onChange={event => setApellido(event.target.value)}
                  />
                </div>
              </div>
              
              <div className="block2">
                <div className="input-block">
                  <label htmlFor="direccion">DIRECCION</label>
                  <input
                    id="direccion"
                    value={direccion}
                    onChange={event => setDireccion(event.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="telefono">TELEFONO</label>
                  <input
                    id="telefono"
                    value={telefono}
                    onChange={event => setTelefono(event.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="nacimiento">FECHA DE<br/>NACIMIENTO</label>
                  <DatePicker selected={nacimiento} onChange={setNacimiento}/>
                </div>
              </div>
            </div>
          </fieldset>
            <button className="confirm-button" type="submit">
              CREAR
            </button>
        </form>
      </main>
    </div>
  )
}