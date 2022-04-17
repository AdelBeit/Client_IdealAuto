import React from "react";
import { useSite } from "../hooks/use_site_context";

export default function About() {
  const site = useSite()
  const sectionName = site.sectionTitles.about;
  const description = site.about;

  return (
    <div id="section__about">
      <h1>{sectionName}</h1>
      <div className="about__body">
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
