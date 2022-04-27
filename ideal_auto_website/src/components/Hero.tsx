import React from "react";
import styles from "./Hero.module.css";
import { Map, VisitUs } from "./VisitUs";

export default function Hero() {
  return (
    <div className={styles["section__hero"]}>
      <Map />
      <VisitUs />
    </div>
  );
}
export { Hero };
