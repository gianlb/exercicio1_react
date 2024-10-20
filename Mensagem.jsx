import React from 'react';

function MensagemUsuario({ autenticado }) {
  if (autenticado) {
    return <h1>Bem-vindo, usuário!</h1>;
  }
  return null; 
}

export default MensagemUsuario;
