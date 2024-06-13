import './App.css'
import FirstComponents from './components/FirstComponents'
import Events from './components/Events'

function App() {

  return (
    <>
      <div>
      <h1>Início do projeto com REACT</h1>
      <p>Primeiro vamos criar e importar alguns componentes</p>
      </div>
      <div>
        <FirstComponents/>
      </div>
      <div>
        <h1>Eventos</h1>
        <Events/>
      </div>
    </>
  )
}

export default App
