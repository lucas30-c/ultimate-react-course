import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/">Fast React Co.</Link>
      <SearchOrder />
      <p>Finn</p>
    </header>
  );
}
