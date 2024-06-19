import "./App.css";
import FirstComponents from "./components/FirstComponents";
import Sunset from "./assets/sunset.jpg";
import UseHooks from "./components/UseHooks";
import ManageData from "./components/ManageData";
import ManageString from "./components/ManageString";

function App() {
  return (
    <>
      <div>
        <h1>Vamos Avançar no REACT</h1>
        <p>Iniciar seção 3 </p>
        <FirstComponents />
        {/* Imagem em public */}
        <img src="images/city1.jpg" alt="city" />
        <legend>The city in the night.</legend>
      </div>
      <div>
        {/* Imatem em assets */}
        <h1>Imagem em assets</h1>
        <p>
          A imagem em assets ficam dentro da pasta assets que é criada com o
          projeto, em src. Em assets precisamos importar as imagens, e o src é
          dinâmico com o nome da importação.
        </p>
        <div>
          <img src={Sunset} alt="sunset" />
          <legend>The red sunset.</legend>
        </div>
      </div>
      <div>
        <div>
          {/* Uso de hooks*/}
          <UseHooks/>
          <ManageData/>
        </div>
      </div>
      <div>
        <div>
          <h2>Agora o uso de useState para string</h2>
          <ManageString/>
        </div>
      </div>
      </>
  );
}
export default App;
