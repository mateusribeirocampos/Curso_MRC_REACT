import FirstComponents from './componentes/FirstComponents';
import TemplateExpression from './componentes/TemplateExpression';
import Events from './componentes/Events';
import Challenge from './componentes/Challenge';
import matrix from './assets/matrix.jpg';

//Style
import './App.css';
import RenderSomething from './componentes/RenderSomething';
import ManageData from './componentes/ManageData';
import ListRender from './componentes/ListRender';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos para aplicação de componentes no React</h1>
      <h2><TemplateExpression/></h2>
      <p>Quais são as funções utilizadas para adicionar componentes</p>
      <FirstComponents/>
      <Events/>
      <Challenge/>
      <RenderSomething/>
      <ManageData/>
      <div>
        {/*Imagem em public*/};
        <img src="download.jpg" alt='Imagem no download' />
      </div>
      <div>
        {/*Imagem em asset*/};
        <img src={matrix} alt='screen of matrix como exemplo'/>
      </div>
      <div>
        <ListRender/>
      </div>
    </div>
  );
}

export default App;
