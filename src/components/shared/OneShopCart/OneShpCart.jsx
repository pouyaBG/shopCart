import React, { useContext } from "react";
import { CardContext } from "../../../context/CardContextProvider";
import Trash from "../../../assets/trash.svg";
import styles from "./one.module.css";
import { shorten } from "../../../helper/function.jsx";
const OneShpCart = (props) => {
  const { image, title, price, quantity } = props.data;
  const { dispatch } = useContext(CardContext);
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.productImage} src={image} alt="product" />
        <div className={styles.data}>
          <h3>{shorten(title)}</h3>
          <p>{price}$</p>
        </div>
        <div>
          <span className={styles.quantity}>{quantity}</span>
        </div>
        <div className={styles.buttonContainer}>
          {quantity > 1 ? (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE_ITEM", payload: props.data })
              }
            >
              -
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            >
              <img src={Trash} />
            </button>
          )}
          <button
            onClick={() =>
              dispatch({ type: "INCREASE_ITEM", payload: props.data })
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneShpCart;
