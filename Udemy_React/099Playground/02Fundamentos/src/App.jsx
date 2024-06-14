import "./App.css";
import FirstComponents from "./components/FirstComponents";
import Events from "./components/Events";
import Events1 from "./components/Events1";
import sunSetField from "./assets/sunSetField.jpg";

function App() {
  return (
    <>
      <div>
        <a href="https://unsplash.com/" target="_blank">
          <img src={sunSetField} className="Picture" alt="Picture" />
        </a>
      </div>
      <div>
        <h1>Início do projeto com REACT</h1>
        <p>Primeiro vamos criar e importar alguns componentes</p>
      </div>
      <div>
        <FirstComponents />
      </div>
      <div>
        <h1>Eventos</h1>
        <Events />
      </div>
      <div>
        <h1>Evento para mudar o background</h1>
        <Events1 />
      </div>
    </>
  );
}

export default App;
