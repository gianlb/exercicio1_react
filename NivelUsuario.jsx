import React from 'react';

function NivelUsuario({ nivel }) {
  return (
    <h1>
      {nivel === "iniciante" 
        ? "Bem-vindo, iniciante!" 
        : nivel === "intermediário" 
        ? "Você está progredindo!" 
        : nivel === "avançado" 
        ? "Parabéns, especialista!" 
        : "Nível desconhecido"}
    </h1>
  );
}

export default NivelUsuario;
