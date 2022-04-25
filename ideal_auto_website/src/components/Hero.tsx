import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles["section__hero"]}>
      <span className={styles["hero__title"]}>Ideal Auto</span>
    </div>
  );
}
export { Hero };
