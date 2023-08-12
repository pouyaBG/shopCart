import React from "react";
import { countQuantity, isInCart, shorten } from "../../../helper/function";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useContext } from "react";
import { CardContext } from "../../../context/CardContextProvider";
import { useData } from "../../../context/DataContext";
import trash from "../../../assets/trash.svg";
function Card({ image, title, price, id }) {
  const { state, dispatch } = useContext(CardContext);
  const data = useData();
  return (
    <div className={styles.container}>
      <img
        className={styles.cardImage}
        src={image}
        alt="product"
        style={{ width: "200px" }}
      />
      <h3 className={styles.textContainer}>{shorten(title)}</h3>
      <p>{price}</p>
      <div className={styles.linkContainer}>
        <Link to={`/details/${id}`}>
          <p>Details</p>
        </Link>
        {countQuantity(state, id) > 0 && (
          <span className={styles.counter}>
            {countQuantity(state, id)}
          </span>
        )}
        <div className={styles.buttonContainer}>
          {isInCart(state, id) ? (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "INCREASE_ITEM", payload: data[id - 1] })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: data[id - 1] })
              }
            >
              Add To Cart
            </button>
          )}
          {countQuantity(state, id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE_ITEM", payload: data[id - 1] })
              }
            >
              -
            </button>
          )}
          {countQuantity(state, id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: data[id - 1] })
              }
            >
              <img src={trash} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
