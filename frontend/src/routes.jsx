import { BrowserRouter, Route, Switch } from "react-router-dom";

import CreateUser from "./pages/CreateUser";
import ListUsers from "./pages/ListUsers";
import UpdateUser from "./pages/UpdateUser";
import DeleteUser from "./pages/DeleteUser";


function Routes(){
  return(
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route path="/listar" component={ListUsers} />
        <Route path="/editar" component={UpdateUser} />
        <Route path="/deletar" component={DeleteUser} />
        <Route path="/" component={CreateUser} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
