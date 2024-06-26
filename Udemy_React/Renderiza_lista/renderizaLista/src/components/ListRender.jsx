import { useState } from "react";

const ListRender = () => {
  const [users] = useState([
    {id: 15789458, name: "Benedito", age: 67},
    {id: 89652325, name: "Celia", age: 65},
    {id: 14589632, name: "Hellen", age: 42},
    {id: 69587215, name: "Elizabeth", age: 40},
  ])
  
    const [list] = useState(["Mateus", "Laura", "Isadora", "Eduardo"]);
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
            <li key={user.id}>
                {user.name} - {user.age}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
