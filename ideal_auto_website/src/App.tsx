import React from "react";
import styles from "./App.module.css";

import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Reviews } from "./components/Reviews";
import { Gallery } from "./components/Gallery";
import { SiteContext } from "./hooks/use_site_context";
import { SiteData } from "./data";

function App() {
  return (
    <SiteContext.Provider value={{ ...SiteData, userAgent: "desktop" }}>
      <div className={styles["container__app"]}>
        <NavBar />
        <Hero />
        <About />
        <Reviews />
        <Gallery />
      </div>
    </SiteContext.Provider>
  );
}

export default App;
