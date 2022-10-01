
import './App.css';
import PrimeiroFormulario from './components/PrimeiroFormulario';

function App() {
  return (
    <div className="App">
      <h1>Formularios</h1>
      <PrimeiroFormulario user={{nome: 'eduardo', email: 'eduardo@gmail.com', senha: '123', bio: 'descricao do usuario', habilitado: 'sim'}}/>
    </div >
  );
}

export default App;
