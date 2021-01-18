import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <button>
        <Link to="/manager">Ingresar como Administrador</Link>
      </button>
      <button>
        <Link to="/agent">Ingresar como Agente Aduanal</Link>
      </button>
    </div>
  );
}

export default LoginPage;
