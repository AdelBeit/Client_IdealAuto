import React from "react";
import { useSite } from "../hooks/use_site_context";

export default function About() {
  const description = useSite().about;

  return (
    <div id="section__about">
      <h1>About</h1>
      <div className="about__body">
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
