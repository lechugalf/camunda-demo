import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Button } from 'antd';
import AgentPage from "./handlings/containers/AgentPage";
import LoginPage from "./handlings/containers/LoginPage";
import ManagerPage from "./handlings/containers/ManagerPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/agent" exact component={AgentPage} />
          <Route path="/manager" exact component={ManagerPage} />
        </Switch>
        <div>
          <Button>
            <Link to="/manager">Ingresar como Administrador</Link>
          </Button>
          <Button>
            <Link to="/agent">Ingresar como Agente Aduanal</Link>
          </Button>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
