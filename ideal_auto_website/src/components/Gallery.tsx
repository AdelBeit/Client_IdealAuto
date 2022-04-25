import React from "react";
import { useSite } from "../hooks/use_site_context";
import { Car } from "../types/types";

function Gallery() {
  const cars = useSite().cars;

  return (
    <div className="section__gallery">
      <h1>Gallery</h1>
      <div className="gallery__cars__container">
        {cars.map((car) => (
          <CarCard
            key={car.miles + car.model + car.make + car.price}
            {...car}
          />
        ))}
      </div>
    </div>
  );
}

function CarCard(car: Car) {
  // TODO: need to pass picture url in props later
  return (
    <>
      <div className="car-card__picture">
        <img alt="" src="http://placekitten.com/20/40" />
      </div>
      <div className="car-card__info">
        <p>
          {car.year} {car.make} {car.model}
        </p>
        <p>
          ${car.price} - {car.miles}K mi
        </p>
      </div>
    </>
  );
}

export { Gallery, CarCard };
