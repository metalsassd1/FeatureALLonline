import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/HomePage.css';
import Navbar1 from './sup-compo/Header/Head'
import Navbar0 from './sup-compo/Header/inage_head'
import Navbar2 from './sup-compo/Header/Search.jsx'

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('https://64005a829f844910298eb65c.mockapi.io/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-page">
      <Navbar0/>
        <Navbar1/>
        <Navbar2/>
      <div className="featured-products">
        <div className='text'>
          <hr/>
        <h2>สินค้า</h2>
        </div>
        <hr/>
        <div className="product-grid row">
          {products.slice(0,3).map((product) => (
            <div className="product col-md-3" key={product.id}>
              <img src={product.image} alt={product.name} onClick={()=>window.location.href='/pay'} />
              <h3>{product.name}</h3>
              <p>{product.price.toFixed(2)} ฿</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
