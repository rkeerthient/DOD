import * as React from "react";
import Cta from "../components/cta";
import { SearchBar } from "@yext/search-ui-react";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <>
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <img
            src="https://www.dvidshub.net/images/dvids_logo_main.png"
            className="w-1/6"
          ></img>
          <div className="text-2xl font-semibold">Turtlehead Tacos</div>
          <div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div>
        </nav>
        <SearchBar></SearchBar>
      </div>
    </>
  );
};

export default Header;
