import * as React from "react";
import Cta from "../components/cta";
import { SearchBar, onSearchFunc } from "@yext/search-ui-react";
import { useSearchActions } from "@yext/search-headless-react";

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
    label: "Features",
    url: "/",
  },
  {
    label: "Features",
    url: "/",
  },
  {
    label: "Content",
    url: "/",
  },
  {
    label: "Stories",
    url: "/",
  },
  {
    label: "Units",
    url: "/",
  },
  {
    label: "Newswire",
    url: "/",
  },
  {
    label: "MEDIA REQUESTS",
    url: "/",
  },
  {
    label: "HOMETOWN NEWS",
    url: "/",
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
          <div className="uppercase flex gap-x-8 text-xs font-light">
            {linkDoms}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
