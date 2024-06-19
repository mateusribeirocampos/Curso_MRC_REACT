import { useState } from 'react'

const ManageString = () => {

    let nome = "Mateus";

    const [name, setName] = useState("Mateus");

  return (
    <div>
        <div>
            <p>Nome: {nome}</p>
            <button onClick={() => nome = "Laura"}>Não muda nome</button>
        </div>
        <div>
            <div>
                <p>Nome: {name}</p>
                <button onClick={() => setName("Laura")}>Mudar nome</button>
            </div>
        </div>
    </div>
  )
}

export default ManageString