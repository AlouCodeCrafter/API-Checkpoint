import axios from "axios";
import { useState, useEffect } from "react";

const UserListe = () => {
  const [listutilisateur, setlistutilisateur] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        setlistutilisateur(Response.data);
      })
      .catch((error) => {
        console.error("il y a une erreur ", error);
      });
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {listutilisateur.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListe;
