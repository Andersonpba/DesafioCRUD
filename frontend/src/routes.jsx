import { BrowserRouter, Route, Switch } from "react-router-dom";

import CreateUser from "./pages/CreateUser";
import ListUsers from "./pages/ListUsers";
import UpdateUser from "./pages/UpdateUser";
import DeleteUser from "./pages/DeleteUser";


function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/crear" component={CreateUser} />
        <Route path="/listar" component={ListUsers} />
        <Route path="/actualizar" component={UpdateUser} />
        <Route path="/deletar" component={DeleteUser} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
