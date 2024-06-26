import { useState } from "react";

const ListRenderAdd = () => {

    const [name, setName] = useState("");

    const [lista, setLista] = useState(["Laura", "Isadora"]);

    const addNomeLista = () => {
        setLista([...lista, name]);
    };

  return (
    <div>
        <div>
            <div>
                <p>Digite seu nome para adicionar a lista</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
        </div>
        <div>
            <p>Adiciona nome: {name}</p>
            <button onClick={addNomeLista}>Adiciona nome:</button>
            <ul>
                {lista.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ListRenderAdd