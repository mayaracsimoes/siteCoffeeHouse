import React from "react";
import Menu from "./menu";
import CardFuncionario from "./CardFuncionario";
import "./styles.css"; // Importe seu arquivo CSS de estilos, se houver.
import Header from "./components/Components";
function App() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
        <title>Coffee House</title>
        <Header />
      </head>
      {/* Renderiza o componente de cabeçalho */}
    </html>
  );
}
export default App;
