const MyComponents = () => {
    return (
      <div>
        <h1>Lista de Componentes</h1>
        <ol>
          <li>Componentes diretos</li>
          <li>Componentes indiretos</li>
        </ol>
        <h2>Componentes diretos</h2>
        <p>
          São aqueles adicionados diretamente no App.jsx e que podemos dizer que é
          o arquivo pai
        </p>
        <h2>Componentes indiretos</h2>
        <p>
          São aqueles componentes adicionados indiretamente, que podemos dizer que
          são arquivos filhos
        </p>
        <p>
          Como exemplo, esse aquivo MyComponents.jsx foi adicionado no arquivo
          FirstComponents.jsx
        </p>
      </div>
    );
  };
  
  export default MyComponents;