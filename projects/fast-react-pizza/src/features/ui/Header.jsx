import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";

export default function Header() {
  return (
    <header className="bg-yellow-500 px-4 py-3 uppercase border-b border-stone-200">
      {/* tracking is letter-spacing */}
      <Link to="/" className="tracking-[5px]">Fast React Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
