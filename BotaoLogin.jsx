import React from 'react';

function BotaoLogin({ logado }) {
  return (
    <button>
      {logado ? "Sair" : "Entrar"}
    </button>
  );
}

export default BotaoLogin;
