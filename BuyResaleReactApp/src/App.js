import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SomeContext from "./context/some-context";

import NavBar from "./components/NavBar";
import PageHome from "./pages/PageHome";
import PageSearch from "./pages/PageSearch";
import PageCompare from "./pages/PageCompare";
import PageResources from "./pages/PageResources";

function App() {
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
      <div className="container-fluid gx-0">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Homepage" />
          </Route>
          <Route exact path="/Homepage">
            <PageHome />
          </Route>
          <Route path="/Search">
            <PageSearch />
          </Route>
          <Route path="/Compare">
            <PageCompare />
          </Route>
          <Route path="/Resources">
            <PageResources />
          </Route>
        </Switch>
      </div>
    </SomeContext.Provider>
  );
}

export default App;
