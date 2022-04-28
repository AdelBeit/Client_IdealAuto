import React from "react";
import { useSite } from "../hooks/use_site_context";
import styles from "./FloatingButtons.module.css";

export default function FloatingButtons() {
  const { imagePaths, contact } = useSite();

  return (
    <div className={styles["section__floating-buttons"]}>
      <button className={styles["floating-buttons__directions"]}>
        <a href="https://maps.google.com/maps/dir//5645+1%2F2+State+Rd+46+Bloomington,+IN+47404/@39.2221276,-86.608603,19z/data=!4m5!4m4!1m0!1m2!1m1!1s0x886c5e4e5337e509:0x7586953049beeab8">
          <img alt="directions button" src={imagePaths.directionsButton} />
        </a>
      </button>
      <button className={styles["floating-buttons__phone"]}>
        <a href={"tel:" + contact.number}>
          <img alt="phone button" src={imagePaths.phoneButton} />
        </a>
      </button>
      <button className={styles["floating-buttons__email"]}>
        <a href={"mailto:" + contact.email}>
          <img alt="email button" src={imagePaths.emailButton} />
        </a>
      </button>
    </div>
  );
}
