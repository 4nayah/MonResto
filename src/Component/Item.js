import React, { useState, useEffect, Fragment } from "react";

function Item(props) {
  const addToBasket = id => {
    props.add(id);
  };

  return (
    <article className="product_Card">
      <img src={props.img} />
      <div className="Product_Name">
        <h3>{props.name}</h3>
        <p className="green">{props.desc}</p>
        {props.price}€
        <button onClick={() => addToBasket(props.id)} className="Button_Basket">
          Ajouter au Panier
        </button>
      </div>
    </article>
  );
}

export default Item;
