// Search component to take in user's input & selection choices
import React, { useContext, useEffect } from "react";
import SomeContext from "../context/some-context";
import Results from "./Results";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Search = () => {
  const someCtx = useContext(SomeContext);

  //================================================//
  //=============== Reference Arrays ===============//
  //================================================//

  // array of all towns in SG, total 26 towns (tengah excluded)
  // towns arranged in regions: North > North-East > East > West > Central
  const townOptions = [
    "Sembawang",
    "Woodlands",
    "Yishun",
    "Ang_Mo_Kio",
    "Hougang",
    "Punggol",
    "Sengkang",
    "Serangoon",
    "Bedok",
    "Pasir_Ris",
    "Tampines",
    "Bukit_Batok",
    "Bukit_Panjang",
    "Choa_Chu_Kang",
    "Clementi",
    "Jurong_East",
    "Jurong_West",
    "Bishan",
    "Bukit_Merah",
    "Bukit_Timah",
    "Central_Area",
    "Geylang",
    "Kallang_Whampoa",
    "Marine_Parade",
    "Queenstown",
    "Toa_Payoh",
  ];

  const townOptionsImages = [];

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

  const displayTownOptions = () => {
    return townOptions.map((townItem, index) => {
      return (
        <Card
          style={{ width: "19rem", margin: "0.5em", paddingTop: "0.5em" }}
          key={index}
        >
          <Card.Img
            variant="top"
            src="https://static1.straitstimes.com.sg/s3fs-public/articles/2017/03/02/2898244_-_16_10_2005.jpg?VersionId=vQMarW6KYsXmISGCYsVZyqqzjDpq.CDM"
            onClick={handleTownClick}
            id={townItem}
          />
          <Card.Body>
            <Card.Title className="centered">
              {townItem.replaceAll("_", " ")}
            </Card.Title>
          </Card.Body>
        </Card>
      );
    });
  };

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
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="centered">Select Town</h1>
            </div>
          </div>

          <div className="row">{displayTownOptions()}</div>
        </div>
      </div>

      {/* ang mo kio image: https://static1.straitstimes.com.sg/s3fs-public/articles/2017/03/02/2898244_-_16_10_2005.jpg?VersionId=vQMarW6KYsXmISGCYsVZyqqzjDpq.CDM */}
      {/* bedok image: */}
      {/* bishan image: */}
      {/* bukit batok image: */}
      {/* bukit merah image: */}
      {/* bukit panjang image: */}
      {/* bukit timah image: */}
      {/* central area image: */}
      {/* choa chu kang image: */}
      {/* clementi image: */}
      {/* geylang image: */}
      {/* hougang image: */}
      {/* jurong east image: */}
      {/* jurong west image: */}
      {/* kallang whampoa image: */}
      {/* marine parade image: */}
      {/* pasir ris image: */}
      {/* punggol image: */}
      {/* queenstown image: */}
      {/* sembawang image: */}
      {/* sengkang image: */}
      {/* serangoon image: */}
      {/* tampines image: */}
      {/* toa payoh image: https://www.roots.gov.sg/-/media/Roots/Images/landmarks/toa-payoh-trail/The-Dragon-Playground-1979.ashx */}
      {/* woodlands image: */}
      {/* yishun image: */}

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
