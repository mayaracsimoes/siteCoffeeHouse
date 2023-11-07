// Header.js
import React from "react";
import logo from "..//assets/logo.svg";
import sombra from "../assets/sombra.svg";
import cafe from '../assets/cafe.svg'
function Header() {
  return (
    <header>
      <title>Coffee House</title>
      <a href="/public/index.html">
        <img src={logo} alt="Logotipo" className="Logotipo" />
      </a>
      <a>
        <img src={sombra} alt="sombra" className="sombra" />
      </a>
      <a>
        <img src={cafe} alt="cafe" className="cafe" />
      </a>
      <a href="/public/index.html">
        <img src="/src/assets/home.svg" alt="home" className="home" />
      </a>
      <a href="funcionarios.html">
        <img
          src="assets/funcionarios.svg"
          alt="funcionarios"
          className="funcionarios"
        />
      </a>
    </header>
  );
}

export default Header;
