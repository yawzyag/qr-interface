import React, { useState } from "react";
import "./App.scss";
import Navigation from "./modules/navigation/Navigation";
import { isAuth } from "./utils/auth";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [auth, setAuth] = useState(isAuth());

  return (
    <>
      <Navigation auth={auth} setAuth={setAuth} />
    </>
  );
}

export default App;
