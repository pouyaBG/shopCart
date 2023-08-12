import React, { useContext } from "react";
import { CardContext } from "../../context/CardContextProvider";
import OneShpCart from "../shared/OneShopCart/OneShpCart";
import { Link } from "react-router-dom";

const ShopCart = () => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        {state.selectedItems.map((item, id) => (
          <OneShpCart key={id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div>
          <div>
            <p>
              <span>Total Items:</span>
              {state.itemsCounter}
            </p>
            <p>
              <span>Total Payments:</span>
              {state.total}
            </p>
          </div>
          <div>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              CHECKOUT
            </button>
            <button onClick={() => dispatch({ type: "CLEAR" })}>CLEAR</button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div>
          <h3>CheckedOut sucses</h3>
          <Link to={"/"}>buy more?</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
