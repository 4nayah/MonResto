import React, { useState, useEffect, Fragment } from "react";
import * as firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import ItemBasket from "./ItemBasket";

function Basket() {
  const [TotalPrice, setTotalPrice] = useState();
  const array = useSelector(state => state.array);
  const dispatch = useDispatch();

  const DeleteBasket = id => {
    dispatch({
      type: "DELETEITEM",
      payload: id
    });
  };

  //console.log(array);

  const CloseBasket = () => {
    dispatch({
      type: "HIDEBASKET"
    });
  };

  const ProductList = array.map(entity => (
    <li>
      <ItemBasket
        key={entity.id + entity.name}
        price={entity.price}
        name={entity.name}
        id={entity.id}
        del={() => DeleteBasket(entity.id)}
      />
    </li>
  ));

  const FinalPrice = array.map(entity => entity.price);

  const sum = FinalPrice.reduce(function(a, b) {
    return a + b * 100;
  }, 0);

  return (
    <div className="basket_container">
      <div className="closeBasket" onClick={() => CloseBasket()}>
        X
      </div>
      <h2>
        Votre <span className="green">Panier</span>
      </h2>
      <ul className="list_Product">{ProductList}</ul>
      <p className="TotalBasket">
        Total : <span className="rightAlign">{sum / 100} €</span>
      </p>
      <button className="Valid_Basket">Valider le Panier & Payer</button>
    </div>
  );
}

export default Basket;
