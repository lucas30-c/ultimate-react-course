import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";

export default function Header() {
  return (
    <header className="bg-yellow-500">
      {/* tracking is letter-spacing */}
      <Link to="/" className="tracking-[5px]">Fast React Co.</Link>
      <SearchOrder />
      <p>Finn</p>
    </header>
  );
}
