import React, { useState, useEffect, Fragment } from "react";
import Menu from "./Component/Menu";
import Basket from "./Component/Basket";

import { useSelector, useDispatch } from "react-redux";

function Main() {
  const basketVisible = useSelector(state => state.showBasket);
  const array = useSelector(state => state.array);
  const dispatch = useDispatch();

  const ToggleBasket = () => {
    dispatch({
      type: "SHOWBASKET"
    });
  };
  return (
    <Fragment>
      <Menu />
      {basketVisible ? null : (
        <div className="BasketToggle" onClick={() => ToggleBasket()}>
          Afficher votre Panier{" "}
          <div className="ItemInBasket">{array.length}</div>
        </div>
      )}
      {basketVisible ? <Basket /> : null}
    </Fragment>
  );
}

export default Main;
