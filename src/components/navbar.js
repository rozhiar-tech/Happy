import React from "react";
import './styles/navbar.css'


function navbar() {
  return (
    <div className="navbar">
        <a href="#home">Home</a>
        <a href="#blogs">Blogs</a>
        <div className="dropdown">
            <button className="dropbtn" type="button">About 
            <i className="fa fa-caret-down"/>
            </button>
            <div className="dropdown-content">
            <button href="#" type="button">Link 1</button>
            <button href="#" type="button">Link 2</button>
            <button href="#" type="button">Link 3</button>
            </div>
        </div> 
        <a href="#contact us">Contact Us</a>
        <image src="logo" alt="" />
</div>
  );
}

export default navbar;