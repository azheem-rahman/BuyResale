// Search component to take in user's input & selection choices
import React, { useContext, useEffect } from "react";
import SomeContext from "../context/some-context";
import Data from "./Data";
import Results from "./Results";

const Search = () => {
  const someCtx = useContext(SomeContext);

  // array of all towns in SG, total 26 towns
  const townOptions = [
    "Ang Mo Kio",
    "Bedok",
    "Bishan",
    "Bukit Batok",
    "Bukit Merah",
    "Bukit Panjang",
    "Bukit Timah",
    "Central Area",
    "Choa Chu Kang",
    "Clementi",
    "Geylang",
    "Hougang",
    "Jurong East",
    "Jurong West",
    "Kallang/Whampoa",
    "Marine Parade",
    "Pasir Ris",
    "Punggol",
    "Queenstown",
    "Sembawang",
    "Sengkang",
    "Serangoon",
    "Tampines",
    "Toa Payoh",
    "Woodlands",
    "Yishun",
  ];

  // array of all flat types in SG, total 7 flat types
  const flatTypeOptions = [
    "1 Room",
    "2 Room",
    "3 Room",
    "4 Room",
    "5 Room",
    "Executive",
    "Multi-Generation",
  ];

  // array of all flat model under each flat types
  const flatModelOptions = [
    {
      flatType: "1 Room",
      flatModel: "Improved",
    },
    {
      flatType: "2 Room",
      flatModel: "2 Room",
    },
    {
      flatType: "2 Room",
      flatModel: "DBSS",
    },
    {
      flatType: "2 Room",
      flatModel: "Improved",
    },
    {
      flatType: "2 Room",
      flatModel: "Model A",
    },
    {
      flatType: "2 Room",
      flatModel: "Premium Apartment",
    },
    {
      flatType: "2 Room",
      flatModel: "Standard",
    },
    {
      flatType: "3 Room",
      flatModel: "DBSS",
    },
    {
      flatType: "3 Room",
      flatModel: "Improved",
    },
    {
      flatType: "3 Room",
      flatModel: "Model A",
    },
    {
      flatType: "3 Room",
      flatModel: "New Generation",
    },
    {
      flatType: "3 Room",
      flatModel: "Premium Apartment",
    },
    {
      flatType: "3 Room",
      flatModel: "Simplified",
    },
    {
      flatType: "3 Room",
      flatModel: "Standard",
    },
    {
      flatType: "3 Room",
      flatModel: "Terrace",
    },
    {
      flatType: "4 Room",
      flatModel: "Adjoined Flat",
    },
    {
      flatType: "4 Room",
      flatModel: "DBSS",
    },
    {
      flatType: "4 Room",
      flatModel: "Improved",
    },
    {
      flatType: "4 Room",
      flatModel: "Model A",
    },
    {
      flatType: "4 Room",
      flatModel: "Model A2",
    },
    {
      flatType: "4 Room",
      flatModel: "New Generation",
    },
    {
      flatType: "4 Room",
      flatModel: "Premium Apartment",
    },
    {
      flatType: "4 Room",
      flatModel: "Premium Apartment Loft",
    },
    {
      flatType: "4 Room",
      flatModel: "Simplified",
    },
    {
      flatType: "4 Room",
      flatModel: "Standard",
    },
    {
      flatType: "4 Room",
      flatModel: "Terrace",
    },
    {
      flatType: "4 Room",
      flatModel: "Type S1",
    },
    {
      flatType: "5 Room",
      flatModel: "3Gen",
    },
    {
      flatType: "5 Room",
      flatModel: "Adjoined Flat",
    },
    {
      flatType: "5 Room",
      flatModel: "DBSS",
    },
    {
      flatType: "5 Room",
      flatModel: "Improved",
    },
    {
      flatType: "5 Room",
      flatModel: "Improved-Maisonette",
    },
    {
      flatType: "5 Room",
      flatModel: "Model A",
    },
    {
      flatType: "5 Room",
      flatModel: "Model A-Maisonette",
    },
    {
      flatType: "5 Room",
      flatModel: "Premium Apartment",
    },
    {
      flatType: "5 Room",
      flatModel: "Premium Apartment Loft",
    },
    {
      flatType: "5 Room",
      flatModel: "Standard",
    },
    {
      flatType: "5 Room",
      flatModel: "Type S2",
    },
    {
      flatType: "Executive",
      flatModel: "Adjoined Flat",
    },
    {
      flatType: "Executive",
      flatModel: "Apartment",
    },
    {
      flatType: "Executive",
      flatModel: "Maisonette",
    },
    {
      flatType: "Executive",
      flatModel: "Premium Apartment",
    },
    {
      flatType: "Executive",
      flatModel: "Premium Maisonette",
    },
    {
      flatType: "Multi-Generation",
      flatModel: "Multi Generation",
    },
  ];

  const handleTownClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    // replace underscore to whitespace in button id and then setTown with it
    someCtx.setTown(event.target.id.replaceAll("_", " "));
  };

  const handleFlatTypeClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    // replace underscore to whitespace in button id and then setTown with it
    someCtx.setFlatType(event.target.id.replaceAll("_", " "));
  };

  const handleFlatModelClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    // replace underscore to whitespace in button id and then setTown with it
    someCtx.setFlatModel(event.target.id.replaceAll("_", " "));
  };

  useEffect(() => {
    if (someCtx.town && someCtx.flatType && someCtx.flatModel) {
      someCtx.setSearchCriteria(
        `${someCtx.town},${someCtx.flatType},${someCtx.flatModel}`
      );
    }
  });

  //   if (someCtx.town && someCtx.flatType && someCtx.flatModel) {
  //     someCtx.setSearchCriteria(
  //       `${someCtx.town} + ${someCtx.flatType} + ${someCtx.flatModel}`
  //     );
  //   }

  const displayFlatModelOptions = () => {
    flatModelOptions.map((flatModelItem) => {
      if (someCtx.flatType === flatModelOptions.flatType) {
        return (
          <button onClick={handleFlatModelClick} id={flatModelItem.flatModel}>
            {flatModelItem.flatModel}
          </button>
        );
      }
    });
  };

  return (
    <div>
      <h1>Select Town</h1>
      {/* <button onClick={handleTownClick} id="ANG_MO_KIO">
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
      </button> */}

      {townOptions.map((townItem) => {
        return (
          <button onClick={handleTownClick} id={townItem}>
            {townItem}
          </button>
        );
      })}

      <h1>Select Flat Type</h1>
      {/* <button onClick={handleFlatTypeClick} id="2_ROOM">
        2 ROOM
      </button>
      <button onClick={handleFlatTypeClick} id="3_ROOM">
        3 ROOM
      </button>
      <button onClick={handleFlatTypeClick} id="4_ROOM">
        4 ROOM
      </button>
      <button onClick={handleFlatTypeClick} id="5_ROOM">
        5 ROOM
      </button> */}
      {flatTypeOptions.map((flatTypeItem) => {
        return (
          <button onClick={handleFlatTypeClick} id={flatTypeItem}>
            {flatTypeItem}
          </button>
        );
      })}

      <h1>Select Flat Model</h1>
      {/* <button onClick={handleFlatModelClick} id="Improved">
        Improved
      </button>
      <button onClick={handleFlatModelClick} id="Model_A">
        Model A
      </button>
      <button onClick={handleFlatModelClick} id="Premium_Apartment">
        Premium Apartment
      </button> */}
      {/* {someCtx.flatType ? { displayFlatModelOptions() } : ""} */}
      {flatModelOptions.map((flatModelItem) => {
        return (
          <button onClick={handleFlatModelClick} id={flatModelItem.flatModel}>
            {flatModelItem.flatModel}
          </button>
        );
      })}

      <Results />
    </div>
  );
};

export default Search;
