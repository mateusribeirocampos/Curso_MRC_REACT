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
import ConditionalRender from './componentes/ConditionalRender';
import ShowUserName from './componentes/ShowUserName';
import CarDetails from './componentes/CarDetails';
/*import { useState } from 'react';*/


function App() {
  const name = "Roberto"
  /*const [userName] = useState("Maria");*/

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
        <ConditionalRender/>
        {/*uso de propos*/}
        <ShowUserName name={name}/>
        {/*destructuring props*/}
        <CarDetails brands = "VW" Km = {10000} color="Azul"/>
      </div>
    </div>
  );
}

export default App;
