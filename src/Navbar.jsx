import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [isDropDownOpen, setDropDownStatus] = useState(false);

  const manageDropDown = () => {
    setDropDownStatus(!isDropDownOpen);
  };
  return (
    <div id="navbar_body">
      <div id="logo" onClick={()=>{window.location.reload()}}>Navbar1</div>
      <div id="search_box_outer">
        <input type="text" id="search_box" placeholder="Search..." />{" "}
        <div><SearchIcon id="search_btn"/></div>
      </div>
      <div id="options">
        <ul id="list1">
          <li onMouseEnter={manageDropDown} onMouseLeave={manageDropDown}>
            <div >Dropdown</div>
            <div
              id="drop_box"
              style={
                isDropDownOpen === false
                  ? { display: "none" }
                  : { display: "inline-block" }
              }
            >
              <ul id="list2" >
                <li >Option1</li>
                <li >Option2</li>
                <li >Option3</li>
                <li >Option4</li>
              </ul>
            </div>
          </li>
          <li>Option1</li>
          <li>Option2</li>
        </ul>
        <div id="hiddenMenu">
          <div>Menu</div>
          <div id="hiddenMenu_options">
            <ul id="hiddenMenu_list1">
              <li>
                <div onClick={manageDropDown}>Dropdown</div>
                <div
                  id="drop_box"
                  style={
                    isDropDownOpen === false
                      ? { display: "none" }
                      : { display: "inline-block" }
                  }
                >
                  <ul id="list2">
                    <li onClick={manageDropDown}>Option1</li>
                    <li onClick={manageDropDown}>Option2</li>
                    <li onClick={manageDropDown}>Option3</li>
                    <li onClick={manageDropDown}>Option4</li>
                  </ul>
                </div>
              </li>
              <li>Option1</li>
              <li>Option2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
