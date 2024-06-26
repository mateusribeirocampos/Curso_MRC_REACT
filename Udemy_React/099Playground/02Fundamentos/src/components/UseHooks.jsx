import { useState } from "react";

const UseHooks = () => {

    let number = 10;

    const [valor, setValor] = useState(150);

    return (
      <div>
        <div>
        <h3>Valor estático mesmo clicando no botão não funcionará</h3>
          <p>Valor estático: {number}</p>
        <button onClick={() => (number)}>Botão estático</button>
        </div>
            <div>
                <h2>O uso do useState</h2>
                <p>Para exemplificar o uso do useState vamos atritbuir um variável let com o valor de 10 e com o botão ele será alterado para 150</p>
                <ul>
                    <li>Primeiro criamos a variável let number: 10</li>
                    <li>Criamos o const [valor, setValor] = useState(150)</li>
                    <li></li>
                </ul>
                <p>Valor: {valor}</p>
                <button onClick={() => (setValor(20))}>Muda valor</button>
            </div>
        </div>
    );
};

export default UseHooks
