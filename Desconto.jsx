import React from 'react';

function Desconto({ temDesconto }) {
  return (
    <h1>{temDesconto ? "Desconto Aplicado" : "Sem Desconto"}</h1>
  );
}

export default Desconto;
