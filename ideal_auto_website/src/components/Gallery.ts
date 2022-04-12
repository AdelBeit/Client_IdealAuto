import React from "react";

export default function Gallery(props) {
  const cars = props.cars.map((car) => (
    <CarCard key={car.miles + car.model + car.make + car.price} {...car} />
  ));
  return (
    <>
      <h1>Gallery</h1>
      <div className="gallery__cars__container">{cars}</div>
    </>
  );
}

function CarCard(props) {
  // TODO: need to pass picture url in props later
  return (
    <>
      <div className="car-card__picture">
        <img alt="" src="http://placekitten.com/20/40" />
      </div>
      <div className="car-card__info">
        <p>{props.car.year} {props.car.make} {props.car.model}</p>
        <p>${props.car.price} - {props.car.miles}K mi</p>
      </div>
    </>
  );
}
