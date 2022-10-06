// Results component to display result
import React, { useContext } from "react";
import SomeContext from "../context/some-context";
import Data from "./Data";
import testData from "./testData";

const Results = () => {
  const someCtx = useContext(SomeContext);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="centered">Results for {someCtx.searchCriteria}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>
              <strong>Street Name</strong>
            </label>
          </div>
          <div className="col">
            <label>
              <strong>Block</strong>
            </label>
          </div>
          <div className="col">
            <label>
              <strong>Storey Range</strong>
            </label>
          </div>
          <div className="col">
            <label>
              <strong>Flat Type</strong>
            </label>
          </div>
          <div className="col">
            <label>
              <strong>Flat Model</strong>
            </label>
          </div>
          <div className="col">
            <label>
              <strong>Floor Area sqm</strong>
            </label>
          </div>
          <div className="col">
            <label>
              <strong>Resale Price</strong>
            </label>
          </div>
          <div className="col">
            <label>
              <strong>Remaining Lease</strong>
            </label>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            {someCtx.post.map((item, index) => {
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
                        <div className="col">
                          <label>{item.street_name}</label>
                        </div>
                        <div className="col">
                          <label>{item.block}</label>
                        </div>
                        <div className="col">
                          <label>{item.storey_range}</label>
                        </div>
                        <div className="col">
                          <label>{item.flat_type}</label>
                        </div>
                        <div className="col">
                          <label>{item.flat_model}</label>
                        </div>
                        <div className="col">
                          <label>{item.floor_area_sqm}</label>
                        </div>
                        <div className="col">
                          <label>{item.resale_price}</label>
                        </div>
                        <div className="col">
                          <label>{item.remaining_lease}</label>
                        </div>
                      </div>
                    );
                  }
                }
              }
            })}
          </div>
        </div>
      </div>

      <Data />
      <br />
    </div>
  );
};

export default Results;
