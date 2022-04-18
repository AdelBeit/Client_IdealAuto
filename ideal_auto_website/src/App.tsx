import React from "react";
import "./App.module.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Reviews } from "./components/Reviews";
import VisitUs from "./components/VisitUs";
import { Gallery } from "./components/Gallery";
import FloatingButtons from "./components/FloatingButtons";
import { SiteContext } from "./hooks/use_site_context";
import { SiteData } from "./data";

// function Abc(){
//   return <SiteContext.Provider value={''}>
//     <foobar />
//   </SiteContext.Provider>
// }
// const reviews = [
//     {
//       rating: "4.5",
//       date: "12/2/22",
//       body: "great mechanic",
//       name: "Andrew Garfield",
//     },
//   ];

//   const cars = [
//     {
//       make: "Tesla",
//       model: "Model 3",
//       year: "2020",
//       miles: "5",
//       price: "47998",
//     },
//   ];
function App() {
  return (
    <SiteContext.Provider value={{ ...SiteData, userAgent: "desktop" }}>
      <NavBar />
      <Hero />
      <About />
      <Reviews />
      <VisitUs />
      <Gallery />
      <FloatingButtons />
    </SiteContext.Provider>
  );
}

export default App;
