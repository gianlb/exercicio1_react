import React from 'react';

function StatusUsuario({ online }) {
  return (
    <h1>{online ? "Usuário online" : "Usuário offline"}</h1>
  );
}

export default StatusUsuario;
