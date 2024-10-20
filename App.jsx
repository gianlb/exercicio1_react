import './App.css'
import AvaliacaoNota from './AvaliacaoNota'
import BotaoLogin from './BotaoLogin'
import Desconto from './Desconto'
import MensagemUsuario from './Mensagem'
import NivelUsuario from './NivelUsuario'
import Nome from './Nome'
import Ola from './Olá'
import StatusEstudante from './StatusEstudante'
import StatusUsuario from './StatusUsuario'

function App() {

  return (
    <>
      <Ola />
      <Nome nome = "Gian" />
      <MensagemUsuario autenticado={true}/>
      <StatusEstudante estudante={false} />
      <AvaliacaoNota  nota = {70}/>
      <Desconto temDesconto={true}/>
      <StatusUsuario online={false}/>
      <NivelUsuario nivel = "avançado"/>
      <BotaoLogin logado={false} /> 
    </>
  )
}

export default App
