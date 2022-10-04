// Results component to display result
import React, { useContext } from "react";
import SomeContext from "../context/some-context";
import Data from "./Data";
import testData from "./testData";

const Results = () => {
  const someCtx = useContext(SomeContext);

  return (
    <div>
      <h1>Results for {someCtx.searchCriteria}</h1>
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
      <Data />

      {/* to print ALL data retrieved from HDB API call*/}
      {/* <div>
        {someCtx.post.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item.street_name}</li>
              <li>{item.block}</li>
              <li>{item.storey_range}</li>
              <li>{item.flat_type}</li>
              <li>{item.flat_model}</li>
              <li>{item.floor_area_sqm}</li>
              <li>{item.resale_price}</li>
              <li>{item.remaining_lease}</li>
            </ul>
          );
        })}
      </div> */}

      {/* to print user's selected data */}
      {someCtx.post.map((item, index) => {
        if (JSON.stringify(someCtx.town) === JSON.stringify(item.town)) {
          if (
            JSON.stringify(someCtx.flatType) === JSON.stringify(item.flat_type)
          ) {
            if (
              JSON.stringify(someCtx.flatModel) ===
              JSON.stringify(item.flat_model)
            ) {
              return (
                <ul key={index}>
                  <li>{item.street_name}</li>
                  <li>{item.block}</li>
                  <li>{item.storey_range}</li>
                  <li>{item.flat_type}</li>
                  <li>{item.flat_model}</li>
                  <li>{item.floor_area_sqm}</li>
                  <li>{item.resale_price}</li>
                  <li>{item.remaining_lease}</li>
                </ul>
              );
            }
          }
        }
      })}
    </div>
  );
};

export default Results;
