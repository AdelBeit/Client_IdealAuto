import { createContext, useContext } from "react";
import { Site } from "../types/types";

type UserAgent = { userAgent: "mobile" | "desktop" };

type SiteContext = Site & UserAgent;

export const SiteContext = createContext<SiteContext | undefined>(undefined);

export const useSite = () => {
  const site = useContext(SiteContext);

  if (!site) {
    console.trace("useSite must be used within a SiteProvider");
    throw new Error("useSite must be used within a SiteProvider");
  }

  if (!site.userAgent) {
    throw new Error("useSite must have a defined user agent");
  }

  return site;
};
