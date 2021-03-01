import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Login } from "./styles";

const SantaLogin = () => {
  const history = useHistory();

  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = () => {
    history.push("/letters");
  };

  return (
    <Login>
      <h1 onClick={handleShowLogin}>Sou papai noel</h1>

      {showLogin && (
        <>
          <input placeholder="Login" type="email" />
          <input placeholder="Senha" type="password" />

          <button onClick={handleLogin}>Fazer login</button>
        </>
      )}
    </Login>
  );
};

export default SantaLogin;
