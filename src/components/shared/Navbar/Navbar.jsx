import React, { useContext } from "react";
import "./Navbar.css";
import Shop from "../../../assets/shop.svg";
import Product from "../../../assets/product.svg";
import { Link } from "react-router-dom";
import { CardContext } from "../../../context/CardContextProvider";
function Navbar() {
  const { state } = useContext(CardContext);
  console.log(state);
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <img className="imageProduct" src={Product} alt="logo" />
          <a href="/">Products</a>
        </li>
      </ul>
      <div className="logo">
        <Link to={"/shpocart"}>
          <img src={Shop} alt="logo" />
        </Link>
        <span>{state.itemsCounter}</span>
      </div>
    </nav>
  );
}

export default Navbar;
