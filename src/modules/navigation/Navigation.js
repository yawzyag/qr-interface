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
import { ToastContainer } from "react-toastify";
import Profile from "../profile";
import Bussines from "../bussines";
import PersonId from "../personId";
const Navigation = ({ auth, setAuth }) => {
  window.addEventListener("storage", (e) => console.log(e));
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
              <Route path="/bussines">
                <Bussines />
              </Route>
              <Route path="/qr/person/:id">
                <PersonId />
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
    </>
  );
};

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
