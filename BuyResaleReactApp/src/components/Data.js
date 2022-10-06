// Data component to fetch API
import React, { useState, useContext, useEffect } from "react";
import SomeContext from "../context/some-context";
import LoadingSpinner from "./LoadingSpinner";

const Data = (props) => {
  const someCtx = useContext(SomeContext);

  const [selection, setSelection] = useState("tampines");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      // console.log(res);

      if (res.status !== 200) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();
      // console.log(data);

      console.log(
        data.result.records.map((item) => {
          return item;
        })
      );

      data.result.records.map((item) => {
        if (JSON.stringify(someCtx.town) === JSON.stringify(item.town)) {
          if (
            JSON.stringify(someCtx.flatType) === JSON.stringify(item.flat_type)
          ) {
            if (
              JSON.stringify(someCtx.flatModel) ===
              JSON.stringify(item.flat_model)
            ) {
              return someCtx.setPost((prevState) => [
                ...prevState,
                {
                  town: item.town,
                  street_name: item.street_name,
                  block: item.block,
                  storey_range: item.storey_range,
                  flat_type: item.flat_type,
                  flat_model: item.flat_model,
                  floor_area_sqm: item.floor_area_sqm,
                  resale_price: item.resale_price,
                  remaining_lease: item.remaining_lease,
                },
              ]);
            }
          }
        }
      });
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  // pull data after HDB related to town selected, limited to 12,000 entries since most entry is 11,000+ for Sengkang
  useEffect(() => {
    const url =
      "https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&limit=12000&q=" +
      someCtx.town;
    fetchPost(url);
  }, [someCtx.searchCriteria]);

  return (
    <div>
      {/* to display loading of fetching data from HDB  */}
      <div>
        {isLoading ? (
          <div className="centered">
            <LoadingSpinner />
          </div>
        ) : (
          props.checkResultFound
        )}
      </div>
    </div>
  );
};

export default Data;
