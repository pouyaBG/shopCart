import React, { useContext } from "react";
import { CardContext } from "../../context/CardContextProvider";
import OneShpCart from "../shared/OneShopCart/OneShpCart";
import { Link } from "react-router-dom";
import styles from "./ShopCart.module.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item, id) => (
          <OneShpCart key={id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <div>
            <p>
              <span>Total Items:</span>
              {state.itemsCounter}
            </p>
            <p>
              <span>Total Payments:</span>
              {state.totalItems} $
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              CHECKOUT
            </button>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              CLEAR
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <h3>Checked out successfully</h3>
          <Link to="/">Buy More</Link>
        </div>
      )}
      {state.itemsCounter === 0 && !state.checkout && (
        <div className={styles.complete}>
          <h3>Want to buy?</h3>
          <Link to="/">Go to shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
