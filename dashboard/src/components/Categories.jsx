import React from "react";

import "../assets/css/table.css";

import { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([0]);

  useEffect(() => {
    console.log("se montó al componente");
    fetch("http://localhost:3030/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.data.countByCategory);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log("se actualizó el componente");
  }, [categories]);

  useEffect(() => {
    return () => console.log("se desmontó el componente");
  }, [categories]);

  let todas = Object.keys(categories);
  console.log(todas);

  let cant = Object.values(categories);
  console.log(cant);

  return (
    <div className="contentTable">
      <h2 className="title">Listado de Categorías</h2>
      <table>
        <thead>
          <tr className="headerTable">
            <th>Categorías</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        {todas.map((cat, i) => {
          return (
            <tr key={i}>
              <td>{cat}</td>
              <td>{cant[i]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Categories;
