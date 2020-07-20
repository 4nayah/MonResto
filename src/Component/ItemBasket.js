import React, { useState, useEffect, Fragment } from "react";

function ItemBasket(props) {
  const deleteItem = id => {
    props.del(id);
  };

  return (
    <div className="Item_Basket">
      <span className="green">{props.name}</span>
      <span className="Price_Basket">{props.price}€</span>
      <button
        onClick={() => deleteItem(props.id)}
        className="Button_Delete_Basket"
      >
        X
      </button>
    </div>
  );
}

export default ItemBasket;
