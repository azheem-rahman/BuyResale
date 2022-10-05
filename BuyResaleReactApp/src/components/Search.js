// Search component to take in user's input & selection choices
import React, { useContext, useEffect } from "react";
import SomeContext from "../context/some-context";
import Results from "./Results";

const Search = () => {
  const someCtx = useContext(SomeContext);

  //================================================//
  //=============== Reference Arrays ===============//
  //================================================//

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

  // array of all flat model under each flat types, total 7 arrays
  const flatModelOptionsOneRoom = ["Improved"];

  const flatModelOptionsTwoRoom = [
    "2_Room",
    "DBSS",
    "Improved",
    "Model_A",
    "Premium_Apartment",
    "Standard",
  ];

  const flatModelOptionsThreeRoom = [
    "DBSS",
    "Improved",
    "Model_A",
    "New_Generation",
    "Premium_Apartment",
    "Simplified",
    "Standard",
    "Terrace",
  ];

  const flatModelOptionsFourRoom = [
    "Adjoined_Flat",
    "DBSS",
    "Improved",
    "Model_A",
    "Model_A2",
    "New_Generation",
    "Premium_Apartment",
    "Premium_Apartment_Loft",
    "Simplified",
    "Standard",
    "Terrace",
  ];

  const flatModelOptionsFiveRoom = [
    "3Gen",
    "Adjoined_Flat",
    "DBSS",
    "Improved",
    "Improved-Maisonette",
    "Model_A",
    "Model_A-Maisonette",
    "Premium_Apartment",
    "Premium_Apartment_Loft",
    "Standard",
  ];

  const flatModelOptionsExecutive = [
    "Adjoined_Flat",
    "Apartment",
    "Maisonette",
    "Premium_Apartment",
    "Premium_Maisonette",
  ];

  const flatModelOptionsMultiGeneration = ["Multi_Generation"];

  //=========================================//
  //=============== Functions ===============//
  //=========================================//

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
    switch (someCtx.flatType) {
      case "1 ROOM":
        return flatModelOptionsOneRoom.map((item, index) => {
          return (
            <button onClick={handleFlatModelClick} id={item} key={index}>
              {item.replaceAll("_", " ")}
            </button>
          );
        });
      case "2 ROOM":
        return flatModelOptionsTwoRoom.map((item, index) => {
          return (
            <button onClick={handleFlatModelClick} id={item} key={index}>
              {item.replaceAll("_", " ")}
            </button>
          );
        });
      case "3 ROOM":
        return flatModelOptionsThreeRoom.map((item, index) => {
          return (
            <button onClick={handleFlatModelClick} id={item} key={index}>
              {item.replaceAll("_", " ")}
            </button>
          );
        });
      case "4 ROOM":
        return flatModelOptionsFourRoom.map((item, index) => {
          return (
            <button onClick={handleFlatModelClick} id={item} key={index}>
              {item.replaceAll("_", " ")}
            </button>
          );
        });
      case "5 ROOM":
        return flatModelOptionsFiveRoom.map((item, index) => {
          return (
            <button onClick={handleFlatModelClick} id={item} key={index}>
              {item.replaceAll("_", " ")}
            </button>
          );
        });
      case "EXECUTIVE":
        return flatModelOptionsExecutive.map((item, index) => {
          return (
            <button onClick={handleFlatModelClick} id={item} key={index}>
              {item.replaceAll("_", " ")}
            </button>
          );
        });
      case "MULTI-GENERATION":
        return flatModelOptionsMultiGeneration.map((item, index) => {
          return (
            <button onClick={handleFlatModelClick} id={item} key={index}>
              {item.replaceAll("_", " ")}
            </button>
          );
        });
    }
  };

  return (
    <div>
      <h1>Select Town</h1>
      {townOptions.map((townItem, index) => {
        return (
          <button onClick={handleTownClick} id={townItem} key={index}>
            {townItem.replaceAll("_", " ")}
          </button>
        );
      })}

      <h1>Select Flat Type</h1>
      {flatTypeOptions.map((flatTypeItem, index) => {
        return (
          <button onClick={handleFlatTypeClick} id={flatTypeItem} key={index}>
            {flatTypeItem.replaceAll("_", " ")}
          </button>
        );
      })}

      <h1>Select Flat Model</h1>
      {someCtx.flatType ? <div>{displayFlatModelOptions()}</div> : ""}

      <Results />
    </div>
  );
};

export default Search;
