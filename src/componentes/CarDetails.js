import React from "react";

const CarDetails = ({brand, Km, color}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {Km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails