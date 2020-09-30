import React, { useState } from "react";
import currencies from "../currencies";
import getExcahngeRate from "../util/networking";

function Header(props) {
  // assumption is that the first currency will always be INR
  let [dropDownValue, setDropDownValue] = useState("INR");
  let [countryFlag, setCountryFlag] = useState(
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
  );

  let newCurrency = null;
  function handleChange(e) {
    newCurrency = e.target.value;
    getExcahngeRate(newCurrency, networkCallback);
  }

  function networkCallback(val) {
    console.log(val);
    if (val === "ERROR") {
      // rever old state
    } else {
      setDropDownValue(newCurrency);
      props.changeConversionFacort(val);
      currencies.forEach((currency) => {
        if (currency.currencyName === newCurrency) {
          props.changeCurrencySymbol(currency.currencySymbol);
          setCountryFlag(currency.currencyImage);
        }
      });
    }
  }

  return (
    <header>
      <h1>Ecom</h1>
      <div className="dropdown">
        Currency :
        <img src={countryFlag} alt="currency" />
        <select
          id="currency"
          className="select-currency"
          onChange={handleChange}
          value={dropDownValue}
        >
          {currencies.map((currency, index) => {
            return (
              <option key={index} value={currency.currencyName}>
                {currency.currencyName}
              </option>
            );
          })}
        </select>
      </div>
    </header>
  );
}

export default Header;
