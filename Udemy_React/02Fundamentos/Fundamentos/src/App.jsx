import './App.css'
import Events from './components/Events'
import FirstComponents from './components/FirstComponents'
import MyComponents from './components/MyComponents'
import SecondComponents from './components/SecondComponents'
import TemplateExpression from './components/TemplateExpressions'

function App() {
  return (
    <>
    <div className='App'>
      <h1>Fundamentos React</h1>
      <FirstComponents />
      <SecondComponents />
      <TemplateExpression />
      <MyComponents/>
      <Events/>
    </div>
    </>
  );
};

export default App
