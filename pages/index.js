import React from "react";


import products from "../public/products";
import Product from '../components/product/product'

const HomePage = () => {
  return (
    <div className='container'>
      <h1>Latest Products</h1>
      <div>
        {products.map((product) => (
          <Product product={product} key={product._id}/>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
