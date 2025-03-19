
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import addItem  from './CartSlice.jsx';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };
  const handleAddToCart = (product) => {
  dispatch(addItem(product));
  setAddedToCart((prevState) => ({
     ...prevState,
     [product.name]: true, // Set the product name as key and value as true to indicate it's added to cart
   }));
};

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick}/>
      </div>
    </div>
  );
}

export default App;



