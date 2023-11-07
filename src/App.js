import React from "react";
import "./styles.css"; // Importe seu arquivo CSS de estilos, se houver.
import Header from "./components/Components";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
};

export default App;
