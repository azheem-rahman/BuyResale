// Data component to fetch API
import React, { useState, useContext, useEffect } from "react";
import SomeContext from "../context/some-context";

const Data = () => {
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
      });
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  // pull ALL data from HDB
  // useEffect(() => {
  //   for (let i = 1; i <= fetchCount; i++) {
  //     if (i === 1) {
  //       const initialUrl =
  //         "https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3";
  //       fetchPost(initialUrl);
  //     } else {
  //       const url = "https://data.gov.sg/" + data.result._links.next;
  //       fetchPost(url);
  //     }
  //   }
  // }, []);

  // pull data limited to 4000 entries from HDB
  // useEffect(() => {
  //   const url =
  //     "https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&limit=999999";
  //   fetchPost(url);
  // }, []);

  // pull data after HDB related to town selected, limited to 5000 entries
  useEffect(() => {
    const url =
      "https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&limit=3000&q=" +
      someCtx.town;
    fetchPost(url);
  }, [someCtx.town]);

  return (
    <div>
      {/* to test if data fetch works correctly
      <div>{isLoading ? "ERROR!" : JSON.stringify(someCtx.post)}</div> */}

      {/* to display loading of fetching data from HDB  */}
      <div>{isLoading ? "Loading..." : "Fetch data completed"}</div>
    </div>
  );
};

export default Data;
