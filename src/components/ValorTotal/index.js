import React from "react";
import './styles.css'


export default function ValorTotal({ response }) {
  return (
    response[1] && (
      <div className="Container">
        <div className="Container2">
          <h2>VOCÊ RECEBERÁ:</h2>
          
          <p>Amanhã: R$ {response[1]},00</p>

          <p>Em 15 dias: R$ {response[15]},00</p>

          <p>Em 30 dias: R$ {response[30]},00</p>

          <p>Em 90 dias: R$ {response[90]},00</p>

        </div>
      </div>
    )
  );
}