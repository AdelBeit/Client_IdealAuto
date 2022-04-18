import React from "react";
import { useSite } from "../hooks/use_site_context";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const button = useSite().menuButtonPath;
  const logo = useSite().logoPath;

  return (
    <div id={styles["section__nav-bar"]}>
      <div className={styles["navbar__menu-button"]}>
        <img alt="" src={button} />
      </div>
      <div className={styles["navbar__logo"]}>
        <img alt="" src={logo} />
      </div>
    </div>
  );
}
