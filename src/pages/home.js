import React from "react";
import FirstSection from "../components/firstSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar"


function Home() {
  return (
    <div>
      <Navbar/>
      <FirstSection/>
      <Footer />
    </div>
  );
}

export default Home;