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
            <h1 className="centered">
              Results for {someCtx.town}, {someCtx.flatType},{" "}
              {someCtx.flatModel}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <label className="text-justify-center">
              <strong>Street Name</strong>
            </label>
          </div>
          <div className="col d-flex justify-content-center">
            <label className="text-justify-center">
              <strong>Block</strong>
            </label>
          </div>
          <div className="col d-flex justify-content-center">
            <label className="text-justify-center">
              <strong>Storey Range</strong>
            </label>
          </div>
          <div className="col d-flex justify-content-center">
            <label className="text-justify-center">
              <strong>Flat Type</strong>
            </label>
          </div>
          <div className="col d-flex justify-content-center">
            <label className="text-justify-center">
              <strong>Flat Model</strong>
            </label>
          </div>
          <div className="col d-flex justify-content-center">
            <label className="text-justify-center">
              <strong>Floor Area sqm</strong>
            </label>
          </div>
          <div className="col d-flex justify-content-center">
            <label className="text-justify-center">
              <strong>Resale Price</strong>
            </label>
          </div>
          <div className="col d-flex justify-content-center">
            <label className="text-justify-center">
              <strong>Remaining Lease</strong>
            </label>
          </div>
        </div>
        <br />
        <div className="row">
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
          })}
        </div>
      </div>

      <Data />
      <br />
    </div>
  );
};

export default Results;
