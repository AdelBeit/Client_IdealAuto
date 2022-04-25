import React from "react";
import { useSite } from "../hooks/use_site_context";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const { menuButton, logo } = useSite().imagePaths;

  return (
    <nav className={styles["section__nav-bar"]}>
      <button className={styles["navbar__menu-button"]}>
        <img className={styles["navbar__images"]} alt="" src={menuButton} />
      </button>
      <button className={styles["navbar__logo"]}>
        <img className={styles["navbar__images"]} alt="" src={logo} />
      </button>
    </nav>
  );
}
