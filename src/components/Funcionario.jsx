// Header.js
import React from "react";
import logo from "../assets/logo.svg";
import sombra from "../assets/sombra.svg";
import cafe from '../assets/cafe.svg'
import home from '../assets/home.svg'
import funcionarios from '../assets/funcionarios.svg'

const Funcionario = () => {
  // Dados dos funcionários
  const funcionarios = [
      {
          "id": 1,
          "nome": "Alonzo Birden",
          "foto": "https://robohash.org/praesentiumomnisdolore.png?size=50x50&set=set1",
          "email": "abirden0@mac.com",
          "subobjeto": {
              "propriedade1": "Valor 1",
              "propriedade2": "Valor 2"
          }
      },
      // ... Outros funcionários
  ];

  return (
   <div>
          <a href="index.html"><img src={logo} alt="Logotipo" className="Logotipo" /></a>

          <a> <img src={sombra} alt="sombra" className="sombra" /> </a>
          <a> <img src={cafe} alt="café" className="cafe" /> </a>

          <a href="index.html"> <img src={home} alt="home" className="home" /> </a>
          <a href="funcionarios.html"> <img src={funcionarios} alt="funcionários" className="funcionarios" /> </a>

          <main>
              {funcionarios.map(funcionario => (
                  <div key={funcionario.id} className="card">
                      <img src={funcionario.foto} alt={funcionario.nome} />
                      <p>{funcionario.nome}</p>
                      <p>{funcionario.subobjeto.propriedade1}</p>
                      <p>{funcionario.subobjeto.propriedade2}</p>
                      <a href={`mailto:${funcionario.email}`} className="email">
                          {funcionario.email}
                      </a>
                  </div>
              ))}
          </main>

          </div>
      
  );
}

export default Funcionario;
