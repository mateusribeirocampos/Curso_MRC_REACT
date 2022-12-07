import FirstComponents from './componentes/FirstComponents';
import TemplateExpression from './componentes/TemplateExpression';
import Events from './componentes/Events';
import Challenge from './componentes/Challenge';

//Style
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos para aplicação de componentes no React</h1>
      <h2><TemplateExpression/></h2>
      <p>Quais são as funções utilizadas para adicionar componentes</p>
      <FirstComponents/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
