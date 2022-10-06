// Search component to take in user's input & selection choices
import React, { useContext, useEffect } from "react";
import SomeContext from "../context/some-context";
import Results from "./Results";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Search = () => {
  const someCtx = useContext(SomeContext);

  //================================================//
  //=============== Reference Arrays ===============//
  //================================================//

  // array of all towns in SG, total 26 towns (tengah excluded)
  // towns arranged in regions: North > North-East > East > West > Central
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

  // array of images for each town options, total 26 images. Follows same order as townOptions array.
  const townOptionsImages = [
    "https://static1.straitstimes.com.sg/s3fs-public/articles/2017/03/02/2898244_-_16_10_2005.jpg?VersionId=vQMarW6KYsXmISGCYsVZyqqzjDpq.CDM",
    "https://thesmartlocal.com/images/easyblog_articles/4744/image00.jpg",
    "https://www.99.co/singapore/insider/wp-content/uploads/2018/06/bishan-ang-mo-kio-park.jpg",
    "https://www.hdb.gov.sg/cs/infoweb/-/media/HDBContent/our-towns-bukit-batok-2.ashx",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Bukit_Merah_in_Central_Region%2C_Singapore.svg/500px-Bukit_Merah_in_Central_Region%2C_Singapore.svg.png",
    "https://www.hdb.gov.sg/cs/infoweb/-/media/HDBContent/Images/CCG/our-towns-bukit-panjang-2.ashx",
    "https://www.hdb.gov.sg/cs/infoweb/-/media/HDBContent/Images/CCG/our-towns-bukit-timah-1.ashx",
    "https://www.hdb.gov.sg/cs/infoweb/-/media/HDBContent/Images/CCG/our-towns-central-1.ashx",
    "https://upload.wikimedia.org/wikipedia/commons/b/b3/Choa_Chu_Kang_MRT_concourse.jpg",
    "https://www.hdb.gov.sg/cs/infoweb/-/media/HDBContent/Images/CCG/our-towns-clementi-3.ashx",
    "https://www.hdb.gov.sg/cs/infoweb/-/media/HDBContent/Images/CCG/our-towns-geylang-1.ashx",
    "https://sgmagazine.com/sites/default/files/styles/og_fb/public/block_316_with_its_iconic_rainbow_mural_painted_on_its_facade_at_hougang_avenue_7_2020_courtesy_of_national_heritage_board.jpg?itok=8jm7jl0V",
    "https://thesmartlocal.com/reviews/media/reviews/photos/original/f0/b9/9f/jurong-east-mall-jem-17-1373263277.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/77/Chinese_Gardens_%288058600224%29.jpg",
    "https://static1.straitstimes.com.sg/s3fs-public/articles/2017/03/02/6682170_-_20_07_2007.jpg?VersionId=dIpnrrHWvgrfH4IR9yFaUP9QZPuLaiFZ",
    "https://api.stateofbuildings.sg/uploads/50b0d780-3879-4d1c-ae77-35e84776be6b.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/34/Pasir_Ris_HDB_8.JPG",
    "https://www.hdb.gov.sg/cs/infoweb/-/media/HDBContent/our-towns-punggol-3.ashx",
    "https://landtransportguru.net/web/wp-content/uploads/2016/07/ewl_ew19_mar16-8.jpg",
    "https://www.hdb.gov.sg/cs/infoweb/-/media/HDBContent/Images/CCG/our-towns-sembawang-1.ashx",
    "https://media.timeout.com/images/105671367/image.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/73/Nex_4.jpg",
    "https://media.timeout.com/images/105692864/750/562/image.jpg",
    "https://www.roots.gov.sg/-/media/Roots/Images/landmarks/toa-payoh-trail/The-Dragon-Playground-1979.ashx",
    "https://www.streetdirectory.com/stock_images/travel/simg_show/11048448300090/134024/woodlands_regional_library/?w=750",
    "https://www.hdb.gov.sg/cs/infoweb/-/media/HDBContent/Images/CCG/our-towns-yishun-3.ashx",
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

  const displayTownOptionsImage = (index) => {
    return townOptionsImages[index];
  };

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
            src={displayTownOptionsImage(index)}
            onClick={handleTownClick}
            id={townItem}
            style={{ width: "278px", height: "185px", cursor: "pointer" }}
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
            <Button
              variant="dark"
              onClick={handleFlatModelClick}
              id={item}
              key={index}
              style={{ margin: "0.5em" }}
            >
              {item.replaceAll("_", " ")}
            </Button>
          );
        });
      case "2 ROOM":
        return flatModelOptionsTwoRoom.map((item, index) => {
          return (
            <Button
              variant="dark"
              onClick={handleFlatModelClick}
              id={item}
              key={index}
              style={{ margin: "0.5em" }}
            >
              {item.replaceAll("_", " ")}
            </Button>
          );
        });
      case "3 ROOM":
        return flatModelOptionsThreeRoom.map((item, index) => {
          return (
            <Button
              variant="dark"
              onClick={handleFlatModelClick}
              id={item}
              key={index}
              style={{ margin: "0.5em" }}
            >
              {item.replaceAll("_", " ")}
            </Button>
          );
        });
      case "4 ROOM":
        return flatModelOptionsFourRoom.map((item, index) => {
          return (
            <Button
              variant="dark"
              onClick={handleFlatModelClick}
              id={item}
              key={index}
              style={{ margin: "0.5em" }}
            >
              {item.replaceAll("_", " ")}
            </Button>
          );
        });
      case "5 ROOM":
        return flatModelOptionsFiveRoom.map((item, index) => {
          return (
            <Button
              variant="dark"
              onClick={handleFlatModelClick}
              id={item}
              key={index}
              style={{ margin: "0.5em" }}
            >
              {item.replaceAll("_", " ")}
            </Button>
          );
        });
      case "EXECUTIVE":
        return flatModelOptionsExecutive.map((item, index) => {
          return (
            <Button
              variant="dark"
              onClick={handleFlatModelClick}
              id={item}
              key={index}
              style={{ margin: "0.5em" }}
            >
              {item.replaceAll("_", " ")}
            </Button>
          );
        });
      case "MULTI-GENERATION":
        return flatModelOptionsMultiGeneration.map((item, index) => {
          return (
            <Button
              variant="dark"
              onClick={handleFlatModelClick}
              id={item}
              key={index}
              style={{ margin: "0.5em" }}
            >
              {item.replaceAll("_", " ")}
            </Button>
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

        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="centered">Select Flat Type</h1>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              {flatTypeOptions.map((flatTypeItem, index) => {
                return (
                  <Button
                    variant="dark"
                    onClick={handleFlatTypeClick}
                    id={flatTypeItem}
                    key={index}
                    style={{ margin: "0.5em" }}
                  >
                    {flatTypeItem.replaceAll("_", " ")}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="centered">Select Flat Model</h1>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            {someCtx.flatType ? <div>{displayFlatModelOptions()}</div> : ""}
          </div>
        </div>
      </div>

      {someCtx.searchCriteria ? <Results /> : ""}
    </div>
  );
};

export default Search;
