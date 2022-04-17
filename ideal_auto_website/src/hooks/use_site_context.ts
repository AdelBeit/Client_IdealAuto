import { createContext, useContext } from "react";
import { Site } from "../types/types";

type UserAgent = { userAgent: "mobile" | "desktop" };

export type SiteContextType = Site & UserAgent;

export const SiteContext = createContext<SiteContextType | undefined>(undefined);

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