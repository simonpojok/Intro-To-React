import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => (
  <header>
    <Link to="/">Adopt Me!</Link>
    <span roll="img" aria-label="logo"></span>
  </header>
);

export default NavBar;
