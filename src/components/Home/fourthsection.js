import React from "react";
import "../styles/fourthSection.css";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";

const fourthSection = () => {
    return (
        <div className="fourth">
        <div>
            <h1 className="header">RECENT BLOGS</h1>
            </div>
            <div className="image-container">
                <img src={logo1} alt=""  />
                <img src={logo2} alt=""  />
                <img src={logo1} alt="" />
            </div>
        </div>
    );
    }

    export default fourthSection;