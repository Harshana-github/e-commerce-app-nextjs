import Image from "next/image";
import React from "react";

import classes from "./product.module.css";
import Rating from "./rating";

const Product = (props) => {
  return (
    <div className={classes.card}>
      <Image
        src={props.product.image}
        alt={props.product.name}
        width={200}
        height={200}
        className={classes.image}
      />
      <div className={classes.cardbody}>
        <h4>{props.product.name}</h4>
        {/* <Rating
          value={props.product.rating}
          text={`${props.product.numReviews} reviews`}
        /> */}
        <h3>${props.product.price}</h3>
      </div>
    </div>
  );
};

export default Product;
