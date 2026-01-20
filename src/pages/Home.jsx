import React from "react";
import Banner from "../components/home/Banner";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <div className=" max-h-screen">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
