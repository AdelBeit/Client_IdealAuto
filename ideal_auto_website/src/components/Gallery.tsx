import React from "react";
import { useSite } from "../hooks/use_site_context";
import { Car } from "../types/types";
import styles from "./Gallery.module.css";

function Gallery() {
  const cars = useSite().cars;

  return (
    <div className={styles["section__gallery"]}>
      <h1>Gallery</h1>
      <div className={styles["gallery-card__container"]}>
        {cars.map((car) => (
          <GalleryCard
            key={car.miles + car.model + car.make + car.price}
            {...car}
          />
        ))}
      </div>
    </div>
  );
}

function GalleryCard(car: Car) {
  // TODO: need to pass picture url in props later
  const addComma = (str: string) => {
    return (
      str.substring(0, str.length - 3) +
      "," +
      str.substring(str.length, str.length - 3)
    );
  };
  const miles = addComma(car.miles);
  const price = addComma(car.price);

  return (
    <div className={styles["section__gallery-card"]}>
      <div className={styles["car__picture"]}>
        <img alt="" src="http://placekitten.com/190/200" />
      </div>
      <div className={styles["car__info"]}>
        <span className={styles["car__name"]}>
          {car.year} {car.make} {car.model}
        </span>
        <span className={styles["car__miles"]}>{miles} mi</span>
        <span className={styles["car__price"]}>${price}</span>
      </div>
    </div>
  );
}

export { Gallery, GalleryCard };
