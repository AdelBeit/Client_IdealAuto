import React from "react";
import { useSite } from "../hooks/use_site_context";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const {menuButtonPath, logoPath} = useSite();
  console.log(logoPath, 'path logo')

  return (
    <header id={styles["section__nav-bar"]}>
      <button className={styles["navbar__menu-button"]}>
        <img alt="" height="50px" width="50px" src={menuButtonPath} />
      </button>
      <button className={styles["navbar__logo"]}>
        <img alt="" height="50px" width="50px" src={logoPath} />
      </button>
    </header>
  );
}
