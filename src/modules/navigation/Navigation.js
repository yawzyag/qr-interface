import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "../home";
import Login from "../auth/Login";
import Register from "../auth/Register";
const Navigation = ({ auth, setAuth }) => {
  window.addEventListener("storage", (e) => console.log(e));
  return (
    <Router>
      <div className="pageContainer">
        <NavigationBar auth={auth} setAuth={setAuth} />

        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home setAuth={setAuth} />
            </Route>
            <Route path="/old-match">
              <Redirect to="/profile" />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

function Profile() {
  return <h3>Perfil del usuario!</h3>;
}

/* function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
} */

export default Navigation;
