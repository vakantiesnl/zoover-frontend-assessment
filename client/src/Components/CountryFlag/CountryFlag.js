import image from './flemish-flag.png'
import React from 'react';

const CountryFlag = ({ countryCode }) => {
    
    function checkCountryCode() {
      return countryCode === "en" ? "gb-eng" : countryCode
    }

    const flagUrl = `https://flagcdn.com/16x12/${checkCountryCode()}.png`

    function imgSource() {
      return flagUrl.includes("nl-be") ? image : flagUrl
    }

  return (
    <img src={imgSource()} alt={`${countryCode} flag`} />
  );
}

export default CountryFlag;
