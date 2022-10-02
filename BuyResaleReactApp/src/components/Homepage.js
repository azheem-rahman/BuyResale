// Homepage Component to choose between showing Search options or Results
import React, { useState } from "react";
import Search from "./Search";
import Results from "./Results";
import SomeContext from "../context/some-context";

const Homepage = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const [town, setTown] = useState("");
  const [flatType, setFlatType] = useState("");
  const [flatModel, setFlatModel] = useState("");

  // for comparison feature
  //   const [compareFirst, setCompareFirst] = useState("");
  //   const [compareSecond, setCompareSecond] = useState("");

  return (
    <SomeContext.Provider
      value={{
        hasSearched,
        setHasSearched,
        town,
        setTown,
        flatType,
        setFlatType,
        flatModel,
        setFlatModel,
      }}
    >
      <div>{hasSearched ? <Results /> : <Search />}</div>
    </SomeContext.Provider>
  );
};

export default Homepage;
