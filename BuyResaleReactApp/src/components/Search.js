// Search component to take in user's input & selection choices
import React, { useContext, useEffect } from "react";
import SomeContext from "../context/some-context";
import Results from "./Results";

const Search = () => {
  const someCtx = useContext(SomeContext);

  // array of all towns in SG, total 26 towns
  const townOptions = [
    "Ang_Mo_Kio",
    "Bedok",
    "Bishan",
    "Bukit_Batok",
    "Bukit_Merah",
    "Bukit_Panjang",
    "Bukit_Timah",
    "Central_Area",
    "Choa_Chu_Kang",
    "Clementi",
    "Geylang",
    "Hougang",
    "Jurong_East",
    "Jurong_West",
    "Kallang_Whampoa",
    "Marine_Parade",
    "Pasir_Ris",
    "Punggol",
    "Queenstown",
    "Sembawang",
    "Sengkang",
    "Serangoon",
    "Tampines",
    "Toa_Payoh",
    "Woodlands",
    "Yishun",
  ];

  // array of all flat types in SG, total 7 flat types
  const flatTypeOptions = [
    "1_Room",
    "2_Room",
    "3_Room",
    "4_Room",
    "5_Room",
    "Executive",
    "Multi-Generation",
  ];

  // array of all flat model under each flat types
  const flatModelOptions = [
    {
      flatType: "1_Room",
      flatModel: "Improved",
    },
    {
      flatType: "2_Room",
      flatModel: "2_Room",
    },
    {
      flatType: "2_Room",
      flatModel: "DBSS",
    },
    {
      flatType: "2_Room",
      flatModel: "Improved",
    },
    {
      flatType: "2_Room",
      flatModel: "Model_A",
    },
    {
      flatType: "2_Room",
      flatModel: "Premium_Apartment",
    },
    {
      flatType: "2_Room",
      flatModel: "Standard",
    },
    {
      flatType: "3_Room",
      flatModel: "DBSS",
    },
    {
      flatType: "3_Room",
      flatModel: "Improved",
    },
    {
      flatType: "3_Room",
      flatModel: "Model_A",
    },
    {
      flatType: "3_Room",
      flatModel: "New_Generation",
    },
    {
      flatType: "3_Room",
      flatModel: "Premium_Apartment",
    },
    {
      flatType: "3_Room",
      flatModel: "Simplified",
    },
    {
      flatType: "3_Room",
      flatModel: "Standard",
    },
    {
      flatType: "3_Room",
      flatModel: "Terrace",
    },
    {
      flatType: "4_Room",
      flatModel: "Adjoined_Flat",
    },
    {
      flatType: "4_Room",
      flatModel: "DBSS",
    },
    {
      flatType: "4_Room",
      flatModel: "Improved",
    },
    {
      flatType: "4_Room",
      flatModel: "Model_A",
    },
    {
      flatType: "4_Room",
      flatModel: "Model_A2",
    },
    {
      flatType: "4_Room",
      flatModel: "New_Generation",
    },
    {
      flatType: "4_Room",
      flatModel: "Premium_Apartment",
    },
    {
      flatType: "4_Room",
      flatModel: "Premium_Apartment_Loft",
    },
    {
      flatType: "4_Room",
      flatModel: "Simplified",
    },
    {
      flatType: "4_Room",
      flatModel: "Standard",
    },
    {
      flatType: "4_Room",
      flatModel: "Terrace",
    },
    {
      flatType: "4_Room",
      flatModel: "Type_S1",
    },
    {
      flatType: "5_Room",
      flatModel: "3Gen",
    },
    {
      flatType: "5_Room",
      flatModel: "Adjoined_Flat",
    },
    {
      flatType: "5_Room",
      flatModel: "DBSS",
    },
    {
      flatType: "5_Room",
      flatModel: "Improved",
    },
    {
      flatType: "5_Room",
      flatModel: "Improved-Maisonette",
    },
    {
      flatType: "5_Room",
      flatModel: "Model_A",
    },
    {
      flatType: "5_Room",
      flatModel: "Model_A-Maisonette",
    },
    {
      flatType: "5_Room",
      flatModel: "Premium_Apartment",
    },
    {
      flatType: "5_Room",
      flatModel: "Premium_Apartment_Loft",
    },
    {
      flatType: "5_Room",
      flatModel: "Standard",
    },
    {
      flatType: "5_Room",
      flatModel: "Type_S2",
    },
    {
      flatType: "Executive",
      flatModel: "Adjoined_Flat",
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
      flatModel: "Premium_Apartment",
    },
    {
      flatType: "Executive",
      flatModel: "Premium_Maisonette",
    },
    {
      flatType: "Multi-Generation",
      flatModel: "Multi_Generation",
    },
  ];

  const handleTownClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    const townSelected = event.target.id.replaceAll("_", " ");
    // replace underscore to whitespace in button id and then setTown with it
    someCtx.setTown(townSelected.toUpperCase());
  };

  const handleFlatTypeClick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    const flatTypeSelected = event.target.id.replaceAll("_", " ");
    // replace underscore to whitespace in button id and then setTown with it
    someCtx.setFlatType(flatTypeSelected.toUpperCase());
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
        `${someCtx.town}, ${someCtx.flatType}, ${someCtx.flatModel}`
      );
    }
  });

  const displayFlatModelOptions = () => {
    flatModelOptions.map((flatModelItem, index) => {
      if (
        JSON.stringify(someCtx.flatType) ===
        JSON.stringify(flatModelItem.flatType)
      ) {
        return (
          <button
            onClick={handleFlatModelClick}
            id={flatModelItem.flatModel}
            key={index}
          >
            {flatModelItem.flatModel}
          </button>
        );
      }
    });
  };

  return (
    <div>
      <h1>Select Town</h1>

      {townOptions.map((townItem, index) => {
        return (
          <button onClick={handleTownClick} id={townItem} key={index}>
            {townItem}
          </button>
        );
      })}

      <h1>Select Flat Type</h1>

      {flatTypeOptions.map((flatTypeItem, index) => {
        return (
          <button onClick={handleFlatTypeClick} id={flatTypeItem} key={index}>
            {flatTypeItem}
          </button>
        );
      })}

      <h1>Select Flat Model</h1>

      {flatModelOptions.map((flatModelItem, index) => {
        return (
          <button
            onClick={handleFlatModelClick}
            id={flatModelItem.flatModel}
            key={index}
          >
            {flatModelItem.flatModel}
          </button>
        );
      })}

      <Results />
    </div>
  );
};

export default Search;
