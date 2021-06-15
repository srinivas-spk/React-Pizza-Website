import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import { productData, productDataTwo } from "./Components/Products/Data";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
