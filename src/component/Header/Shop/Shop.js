import React, { useEffect, useState } from "react";
import Cart from "../../cart/Cart";
import Product from "../../product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    console.log(product);
    // cart.push(product)
    const newCart =[ ...cart, product];
    setCart(newCart);

  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="products-cart">
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
