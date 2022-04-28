import React from "react";
import { useSite } from "../hooks/use_site_context";
import styles from "./About.module.css";

export default function About() {
  const description = useSite().about;

  return (
    <div className={styles["section__about"]}>
      <h1>About</h1>
      <div className={styles["about__body"]}>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
}
