"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";

const Home = () => {
  const [isSlideOpen, setIsSlideOpen] = useState(false);

  // Function to update slide state
  const handleSlideStateChange = (state) => {
    setIsSlideOpen(state);
  };

  return (
    <div>
      <Navbar isSlideOpen={isSlideOpen} />
      <Content isSlideOpen={isSlideOpen} />
    </div>
  );
};

export default Home;
