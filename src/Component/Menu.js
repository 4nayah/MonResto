import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Item from "./Item";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./Footer";

function Menu() {
  const [product, setProduct] = useState([]);
  const array = useSelector(state => state.array);
  const basketVisible = useSelector(state => state.showBasket);

  const dispatch = useDispatch();

  const addToBasket = (id, name, price) => {
    const date = Date.now();
    dispatch({
      type: "ADDTOBASKET",
      payload: {
        new: { id: date, name: name, price: price }
      }
    });
  };

  const rootRef = firebase
    .database()
    .ref()
    .child("products");

  useEffect(() => {
    rootRef.on("value", snapshot => {
      setProduct(snapshot.val());
    });
  }, []);

  const ItemStock = product.map(entity => (
    <Item
      key={entity.id}
      price={entity.price}
      name={entity.name}
      id={entity.id}
      img={entity.img}
      desc={entity.desc}
      add={() => addToBasket(entity.id, entity.name, entity.price, entity.img)}
    />
  ));

  return (
    <section
      className={basketVisible ? "Menu_Container blur" : "Menu_Container"}
    >
      <h1>
        Eat Healthy<span className="green">.</span>
        <div className="BaseLine">
          Qui a dit que c'était difficile de manger{" "}
          <span className="green">bien</span> et{" "}
          <span className="green">bon</span> ?
        </div>
      </h1>
      <h2 className="Subtitle">
        Notre <span className="green">Selection pour vous :</span>
      </h2>
      {ItemStock}
      <Footer />
    </section>
  );
}

export default Menu;
