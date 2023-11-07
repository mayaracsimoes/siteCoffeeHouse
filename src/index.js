import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Funcionario from "./components/Funcionario";
import CardFuncionario from "./CardFuncionario";

const home = ReactDOM.createRoot(document.getElementById("home"));
console.log("oi to aqui");

home.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const funcionarios = ReactDOM.createRoot(
  document.getElementById("funcionarios")
);
console.log("oi to aqui");
funcionarios.render(
  <React.StrictMode>
    <CardFuncionario />
  </React.StrictMode>
);
