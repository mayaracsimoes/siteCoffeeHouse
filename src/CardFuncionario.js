import React from "react";

function CardFuncionario({ funcionario }) {
  return (
    <div className="card">
      <img
        src={funcionario.foto}
        alt={funcionario.nome}
        style={{ backgroundColor: "black" }}
      />
      <h2>{funcionario.nome}</h2>
      <p>{funcionario.subobjeto.propriedade1}</p>
      <p>{funcionario.subobjeto.propriedade2}</p>
      <a
        href={`mailto:${funcionario.email}`}
        style={{ backgroundColor: "gray" }}
      >
        {funcionario.email}
      </a>
    </div>
  );
}

export default CardFuncionario;
