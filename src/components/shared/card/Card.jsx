import React from 'react'
import { shorten } from '../../../helper/function'
import { Link } from 'react-router-dom'

function Card({ image, title, price, id }) {
  return (
    <div>
      <img src={image} alt="product" style={{ width: "200px" }} />
      <h3>{shorten(title)}</h3>
      <p>{price}</p>
      <div>
        <Link to={`/details/${id}`}>
          <p>Details</p>
        </Link>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card