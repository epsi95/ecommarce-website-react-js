import React from "react";

function Item(props) {
  return (
    <div className="item">
      <img src={props.productImage} alt="product" />
      <h1>{props.productName}</h1>
      <p>{props.productPrice}</p>
    </div>
  );
}

export default Item;
