import React from "react";
import './styles/navbar.css'
//import logo from "./public/images/amro.png"//

function navbar() {
  return (
    <div class="navbar">
  <a href="#home">Home</a>
  <a href="#blogs">Blogs</a>
  <div class="dropdown">
    <button class="dropbtn">About 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
  <a href="#contact us">Contact Us</a>
  <image src="logo" alt="" />
</div>
  );
}

export default navbar;