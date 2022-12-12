import React from "react";
import "./searchbar.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { useState } from "react";

const SearchBar = () => {
  const [openDestination, setOpenDestination] = useState(false);
  const [destination, setDestination] = useState("Any destination");

  return (
    <>
      <div className="searchBar">
        <div className="searchBarItem">
          <p>Cruising to</p>
          <div className="searchBarGrid">
            <span 
            className="searchBarText">{destination}</span>
            <MdOutlineKeyboardArrowDown className="icon" />
          </div>
          <div className="destinationContainer">
            <button className="destinationItem btn-secondary" value={destination}>Alaska</button>
            <button className="destinationItem btn-secondary">Bahamas</button>
            <button className="destinationItem btn-secondary">Bermuda</button>
            <button className="destinationItem btn-secondary">Cuba</button>
          </div>
        </div>
        <div className="searchBarItem">
          <p>Departure from</p>
          <div className="searchBarGrid">
            <span className="searchBarText">Any port</span>
            <MdOutlineKeyboardArrowDown className="icon" />
          </div>
        </div>
        <div className="searchBarItem">
          <p>Leaving</p>
          <div className="searchBarGrid">
            <span className="searchBarText">Any date</span>
            <BiCalendar className="icon" />
          </div>
        </div>
        <div className="searchBarItem">
          <button className="btn-primary">Search cruises</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
