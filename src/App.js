import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

const App = () => {
  const themehook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themehook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
