import React from "react";
import "./App.css";

import logo from "./logo.svg";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import VisitUs from "./components/VisitUs";
import Gallery from "./components/Gallery";
import FloatingButtons from "./components/FloatingButtons";


function App() {

  const reviews = {
    "rating": "4.5",
    "date": "12/2/22",
    "body": "great mechanic",
    "name": "Andrew Garfield",
}

  const cars = {
    "Make": "Tesla",
    "Model": "Model 3",
    "Year": "2020",
    "Miles": "5",
    "Price": "47998"
}

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Testimonials {...reviews}/>
      <VisitUs />
      <Gallery {...cars} />
      <FloatingButtons />
    </>
  );
}

export default App;
