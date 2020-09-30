import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FlexContainer from "./FlexContainer";
import Item from "./Item";
import products from "../products";

function App() {
  // assumption is that the first currency will always be INR
  let [conversionFactor, setConversionFactor] = useState(1);
  let [currencySymbol, setCurrencySymbol] = useState("₹");

  function changeConversionFacort(newConversionFacor) {
    setConversionFactor(newConversionFacor);
  }

  function changeCurrencySymbol(newCurrencySymbol) {
    setCurrencySymbol(newCurrencySymbol);
  }

  return (
    <div>
      <Header
        changeConversionFacort={changeConversionFacort}
        changeCurrencySymbol={changeCurrencySymbol}
      />
      <FlexContainer>
        {products.map((product, index) => {
          return (
            <Item
              key={index}
              productImage={product.productImage}
              productName={product.productName}
              productPrice={
                currencySymbol +
                " " +
                Math.round(product.productPrice * conversionFactor * 10) / 10
              }
            />
          );
        })}
      </FlexContainer>
      <Footer />
    </div>
  );
}

export default App;
