import {useState} from 'react'

const ListRender = () => {
    const [list] = useState (["Rodrigo", "Thiago", "Pedro", "Mateus", "Eduardo"]);

    const [users, setUsers] = useState([
        {id: 1, name: "João", age: 32},
        {id: 2, name: "Mateus", age: 42},
        {id: 3, name: "Laura", age: 39},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers ((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    };

  return (
    <div>
        <ul>{/*map utilizado para array*/}
            {list.map((item, i) => 
            <li key={i}>
                {item}
            </li>
            )} {/*abre e fechamento de () */}
        </ul>
        <ul>
            {users.map((user) => 
            <li key={user.id}>{user.name} - {user.age}</li>)}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender