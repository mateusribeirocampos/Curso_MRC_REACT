import './App.css'
import ListRender from './components/ListRender'
import ListRenderAdd from './components/ListRenderAdd'
import PreviousState from './components/PreviousState'
import PreviousStatePratica from './components/PreviousStatePratica'
import PropKey from './components/PropKey'
import RenderizarLista from './components/RenderizarLista'

function App() {


  return (
    <>
    <div>
      <div>
        <h1>Renderização de lista</h1>
        <div>
          <RenderizarLista/>
        </div>
      </div>
      <div>
        <div>
          <ListRender/>
        </div>
      </div>
      <div>
        <div>
        <h1>A propriedade key</h1>
        <PropKey/>
        </div>
      </div>
      <div>
        <div>
          <h2>Adiciona nome a lista</h2>
          <ListRenderAdd/>
        </div>
      </div>
      <div>
        <div>
          <h1>Teoria sobre Previous State</h1>
          <PreviousState/>
        </div>
      </div>
      <div>
        <div>
          <PreviousStatePratica/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
