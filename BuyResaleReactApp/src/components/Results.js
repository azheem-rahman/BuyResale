// Results component to display result
import React, { useContext } from "react";
import SomeContext from "../context/some-context";
import Data from "./Data";
import testData from "./testData";

const Results = () => {
  const someCtx = useContext(SomeContext);

  return (
    <div>
      <h1>Results for {someCtx.town}</h1>
      {/* display using test data array */}
      {/* {testData.result.records.map((listItem, index) => {
        return someCtx.town === listItem.town ? (
          <ul key={index}>
            <li>{listItem.street_name}</li>
            <li>{listItem.block}</li>
            <li>{listItem.storey_range}</li>
            <li>{listItem.flat_type}</li>
            <li>{listItem.flat_model}</li>
            <li>{listItem.floor_area_sqm}</li>
            <li>{listItem.resale_price}</li>
            <li>{listItem.remaining_lease}</li>
          </ul>
        ) : (
          ""
        );
      })} */}

      {/* to test what data is fetched
      <div>{JSON.stringify(someCtx.post)}</div> */}
    </div>
  );
};

export default Results;
