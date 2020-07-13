import React, { useState } from "react";
import "./App.scss";
import Navigation from "./modules/navigation/Navigation";
import { isAuth } from "./utils/auth";

function App() {
  const [auth, setAuth] = useState(isAuth());

  return (
    <>
      <Navigation auth={auth} setAuth={setAuth} />
    </>
  );
}

export default App;
