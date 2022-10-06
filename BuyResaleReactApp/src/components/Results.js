// Results component to display result
import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import SomeContext from "../context/some-context";
import Data from "./Data";
import testData from "./testData";

const Results = () => {
  const someCtx = useContext(SomeContext);

  let resultFound = false;

  const checkResultFound = () => {
    if (someCtx.post.length === 0) {
      return (
        <div className="row">
          <div className="col d-flex justify-content-center">
            {someCtx.post.length} results found
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col d-flex justify-content-center">
            {someCtx.post.length} results found
            {(resultFound = true)}
          </div>
        </div>
      );
    }
  };

  const printHeaders = () => {
    const headerArr = [
      "No.",
      "Street Name",
      "Block",
      "Storey Range",
      "Flat Type",
      "Flat Model",
      "Floor Area sqm",
      "Resale Price",
      "Remaining Lease",
    ];
    return (
      <div className="row">
        {headerArr.map((item, index) => {
          return (
            <div className="col d-flex justify-content-center">
              <label className="text-justify-center">
                <strong>{item}</strong>
              </label>
            </div>
          );
        })}
      </div>
    );
  };

  const printResults = () => {
    return someCtx.post.map((item, index) => {
      const resultArr = [
        index + 1,
        item.street_name,
        item.block,
        item.storey_range,
        item.flat_type,
        item.flat_model,
        item.floor_area_sqm,
        item.resale_price,
        item.remaining_lease,
      ];
      return (
        <div className="row" key={index}>
          {resultArr.map((item) => {
            return (
              <div className="col d-flex justify-content-center">
                <label className="text-justify-center">{item}</label>
              </div>
            );
          })}
        </div>
      );
    });
  };

  const searchAgain = () => {
    someCtx.setTown("");
    someCtx.setFlatType("");
    someCtx.setFlatModel("");
    someCtx.setSearchCriteria(null);
    someCtx.setPost([]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="centered">
            Results for {someCtx.town}, {someCtx.flatType}, {someCtx.flatModel}
          </h1>
        </div>
      </div>

      <Data checkResultFound={checkResultFound()} />
      <br />

      <div className="row">
        {resultFound ? printHeaders() : ""}
        {printResults()}
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <Button variant="success">Show More</Button>
        </div>
        <div className="col d-flex justify-content-center">
          <Button variant="danger" onClick={searchAgain}>
            Search Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
