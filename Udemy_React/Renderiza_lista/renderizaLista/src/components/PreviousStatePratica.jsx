import { useState } from 'react';

const PreviousStatePratica = () => {
    const [users, setUsers] = useState ([
        {id: 1, name:"Antonio", age: 65},
        {id: 2, name: "Rachel", age: 63},
        {id: 3, name: "Batatinha", age: 5},

    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id); 
        })
    }


  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}, {user.age}</li>
            ))}
        </ul>
        <div>
            <button onClick={deleteRandom}>Deleta nome aleatório</button>
        </div>
    </div>
  )
}

export default PreviousStatePratica