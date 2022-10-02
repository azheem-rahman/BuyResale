// Search component to take in user's input & selection choices
import React, { useContext } from "react";
import SomeContext from "../context/some-context";
import Results from "./Results";

const Search = () => {
  const someCtx = useContext(SomeContext);

  const handleTownClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    switch (event.target.id) {
      case "ANG_MO_KIO":
        someCtx.setTown("ANG MO KIO");
        break;
      case "PASIR_RIS":
        someCtx.setTown("PASIR RIS");
        break;
      case "TOA_PAYOH":
        someCtx.setTown("TOA PAYOH");
        break;
    }
  };

  const handleTypeClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
  };

  const handleModelClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
  };

  return (
    <div>
      <h1>Select Town</h1>
      <button onClick={handleTownClick} id="ANG_MO_KIO">
        Ang Mo Kio
      </button>
      <button onClick={handleTownClick} id="TAMPINES">
        Tampines
      </button>
      <button onClick={handleTownClick} id="PASIR_RIS">
        Pasir Ris
      </button>
      <button onClick={handleTownClick} id="TOA_PAYOH">
        Toa Payoh
      </button>

      <h1>Select Flat Type</h1>
      <button onClick={handleTypeClick} id="2_ROOM">
        2 ROOM
      </button>
      <button onClick={handleTypeClick} id="3_ROOM">
        3 ROOM
      </button>
      <button onClick={handleTypeClick} id="4_ROOM">
        4 ROOM
      </button>
      <button onClick={handleTypeClick} id="5_ROOM">
        5 ROOM
      </button>

      <h1>Select Flat Model</h1>
      <button onClick={handleModelClick} id="Improved">
        Improved
      </button>
      <button onClick={handleModelClick} id="Model_A">
        Model A
      </button>
      <button onClick={handleModelClick} id="Premium_Apartment">
        Premium Apartment
      </button>
      <Results />
    </div>
  );
};

export default Search;
