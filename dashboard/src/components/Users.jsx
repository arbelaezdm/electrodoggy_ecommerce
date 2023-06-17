import React from "react";

import "../assets/css/table.css";

import { useState, useEffect } from "react";
import Pagination from "./Pagination";

function Users() {
  const [users, setUsers] = useState([0]);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(5);

  /* Calculating the maximum number of pages. */
  const maximo = users.length / porPagina;
  // console.log(maximo);

  useEffect(() => {
    console.log("se montó al componente");
    fetch("http://localhost:3030/user/usersList")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        console.log(data.users);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log("se actualizó el componente");
  }, []);

  useEffect(() => {
    return () => console.log("se desmontó el componente");
  }, [users]);

  console.log(users.map[1]);

  return (
    <div className="contentTable">
      <h2 className="title">Listado de Usuarios</h2>
      <table>
        <thead>
          <tr className="headerTable">
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody className="boddyTable">
          {users
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map((us, i) => {
              return (
                <tr key={i}>
                  <td>{us[1]}</td>
                  <td>{us[2]}</td>
                </tr>
              );
            })}
        </tbody>
        <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </table>
    </div>
  );
}

export default Users;
