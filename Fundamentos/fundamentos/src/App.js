// Components
import FirstComponents from './components/FirstComponents';
import FirstComponents1 from './components/FirstComponents1';


// Styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponents/>
      <h2>Segundo componente importado</h2>
      <FirstComponents1/>
    </div>
  );
}

export default App;
