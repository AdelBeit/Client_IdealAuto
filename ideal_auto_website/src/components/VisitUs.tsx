import React from "react";
import { useSite } from "../hooks/use_site_context";
import styles from "./VisitUs.module.css";

export default function VisitUs() {
  const hours = useSite().hours;
  const address = useSite().address;
  const contact = useSite().contact;

  return (
    <div className={styles["section__visit-us"]}>
      <h1>Visit Us</h1>
      <div className={styles["visit-us__map__container"]}>
        <div className={styles["visit-us__map"]}>
          <img alt="" src="http://placekitten.com/20/40" />
        </div>
      </div>
      <div className={styles["visit-us__contact"]}>
        <h3>Contact</h3>
        <p>{contact.number}</p>
        <p>{contact.email}</p>
      </div>
      <div className={styles["visit-us__address"]}>
        <h3>Address</h3>
        <p>{address.street}</p>
        <p>{address.city}</p>
        <p>{address.zipcode}</p>
      </div>
      <div className={styles["visit-us__hours"]}>
        {hours.map((hour) => (
          <p key={hour[0] + hour[-1] + hour}>{hour}</p>
        ))}
      </div>
    </div>
  );
}
