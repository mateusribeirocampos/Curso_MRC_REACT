import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState(20);

    console.log(number);

  return (
    <div>
        <div>
            <p>Valor: {someData} </p>
            <button onClick={() => someData = 15}>Mudar variável</button>
        </div>
        <div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(65)}>Variable change</button>
            </div>
        </div>
    </div>
  )
}

export default ManageData