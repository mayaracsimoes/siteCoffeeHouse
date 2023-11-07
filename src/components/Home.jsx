import React from "react";
import logo from "../assets/logo.svg";
import sombra from "../assets/sombra.svg";
import cafe from '../assets/cafe.svg'
import home from '../assets/home.svg'
import funcionarios from '../assets/funcionarios.svg'
import detalhe from '../assets/detalhe.svg'
import descricao from '../assets/descricao.svg'

const Home = () => {
    return (
      <div>
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
            <img src={home} alt="home" className="home" />
          </a>

          <a href="/public/funcionarios.html">
            <img src={funcionarios} alt="funcionarios" className="funcionarios"/>
          </a>
        </header>
        <main>
          <a>
            <img src={detalhe} alt="detalhe" className="detalhe" />
          </a>
          <a>
            <img src={descricao} alt="descricao" className="descricao" />
          </a>
        </main>
      </div>
    );
}

export default Home;
