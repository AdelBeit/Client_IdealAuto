import React from "react";
import "./App.module.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Reviews, ReviewCard } from "./components/Reviews";
import VisitUs from "./components/VisitUs";
import { Gallery, CarCard } from "./components/Gallery";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  const reviews = [
    {
      rating: "4.5",
      date: "12/2/22",
      body: "great mechanic",
      name: "Andrew Garfield",
    },
  ];

  const cars = [
    {
      make: "Tesla",
      model: "Model 3",
      year: "2020",
      miles: "5",
      price: "47998",
    },
  ];

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Reviews>
        {reviews.map((review) => (
          <ReviewCard key={review.name + review.date} {...review} />
        ))}
      </Reviews>
      <VisitUs />
      <Gallery>
        {cars.map((car) => (
          <CarCard
            key={car.miles + car.model + car.make + car.price}
            {...car}
          />
        ))}
      </Gallery>
      <FloatingButtons />
    </>
  );
}

export default App;
