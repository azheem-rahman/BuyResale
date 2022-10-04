// Homepage Component to choose between showing Search options or Results
import React, { useState } from "react";
import Search from "./Search";
import Results from "./Results";
import SomeContext from "../context/some-context";
import Data from "./Data";

const Homepage = () => {
  const [town, setTown] = useState("");
  const [flatType, setFlatType] = useState("");
  const [flatModel, setFlatModel] = useState("");

  //   const [numOfCriteriaSelected, setNumOfCriteriaSelected] = useState(0);

  const [searchCriteria, setSearchCriteria] = useState(null);

  const [post, setPost] = useState([]);

  // for comparison feature
  //   const [compareFirst, setCompareFirst] = useState("");
  //   const [compareSecond, setCompareSecond] = useState("");

  return (
    <SomeContext.Provider
      value={{
        town,
        setTown,
        flatType,
        setFlatType,
        flatModel,
        setFlatModel,
        searchCriteria,
        setSearchCriteria,
        post,
        setPost,
      }}
    >
      <div>
        <Search />
      </div>
    </SomeContext.Provider>
  );
};

export default Homepage;
