import React from "react";

type Car = {
  make: string;
  model: string;
  year: string;
  miles: string;
  price: string;
  image?: string;
};

interface GalleryProps {
  children: JSX.Element | JSX.Element[];
}

function Gallery({ children }: GalleryProps) {
  return (
    <>
      <h1>Gallery</h1>
      <div className="gallery__cars__container">{children}</div>
    </>
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
