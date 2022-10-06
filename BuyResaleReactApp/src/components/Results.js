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
      "Floor Area (sqm)",
      "Resale Price",
      "Remaining Lease",
    ];
    return headerArr.map((item, index) => {
      return (
        <div className="row" key={index}>
          <div className="col d-flex justify-content-center">
            <label className="text-justify-center">
              <strong>{item}</strong>
            </label>
          </div>
        </div>
      );
    });
  };

  const printResults = () => {
    printHeaders();
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

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="centered">
              Results for {someCtx.town}, {someCtx.flatType},{" "}
              {someCtx.flatModel}
            </h1>
          </div>
        </div>

        <Data checkResultFound={checkResultFound()} />
        <br />

        <div className="row">
          {resultFound ? printResults() : ""}
          {/* {someCtx.post.map((item, index) => {
            if (JSON.stringify(someCtx.town) === JSON.stringify(item.town)) {
              if (
                JSON.stringify(someCtx.flatType) ===
                JSON.stringify(item.flat_type)
              ) {
                if (
                  JSON.stringify(someCtx.flatModel) ===
                  JSON.stringify(item.flat_model)
                ) {
                  return (
                    <div className="row" key={index}>
                      <div className="col d-flex justify-content-center">
                        <label className="text-justify-center">
                          {index + 1}
                        </label>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <label className="text-justify-center">
                          {item.street_name}
                        </label>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <label className="text-justify-center">
                          {item.block}
                        </label>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <label className="text-justify-center">
                          {item.storey_range}
                        </label>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <label className="text-justify-center">
                          {item.flat_type}
                        </label>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <label className="text-justify-center">
                          {item.flat_model}
                        </label>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <label className="text-justify-center">
                          {item.floor_area_sqm}
                        </label>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <label className="text-justify-center">
                          {item.resale_price}
                        </label>
                      </div>
                      <div className="col d-flex justify-content-center">
                        <label>{item.remaining_lease}</label>
                      </div>
                    </div>
                  );
                }
              }
            }
          })} */}
        </div>
      </div>

      <br />
    </div>
  );
};

export default Results;
