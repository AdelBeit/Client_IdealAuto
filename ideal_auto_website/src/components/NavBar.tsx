import React from "react";
import { useSite } from "../hooks/use_site_context";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const { directionsButton, phoneButton, emailButton } = useSite().imagePaths;

  return (
    <nav className={styles["section__nav-bar"]}>
      {/* <button className={styles["navbar__menu-button"]}>
        <img className={styles["navbar__images"]} alt="" src={menuButton} />
      </button> */}
      <h1>Ideal Auto</h1>
      <div className={styles["nav-bar__button-group"]}>
        <button className={styles["nav-bar__directions"]}>
          <img alt="directions button" src={directionsButton} />
        </button>
        <button className={styles["nav-bar__phone"]}>
          <img alt="phone button" src={phoneButton} />
        </button>
        <button className={styles["nav-bar__email"]}>
          <img alt="email button" src={emailButton} />
        </button>
      </div>

      {/* <button className={styles["navbar__logo"]}>
        <img className={styles["navbar__images"]} alt="" src={logo} />
      </button> */}
    </nav>
  );
}
