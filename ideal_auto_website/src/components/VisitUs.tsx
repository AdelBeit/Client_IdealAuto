import React from "react";
import { useSite } from "../hooks/use_site_context";
import styles from "./VisitUs.module.css";

function Map() {
  return (
    <div className={styles["visit-us__map-container"]}>
      <iframe
        className={styles["visit-us__map-canvas"]}
        src="https://maps.google.com/maps?q=5645%201/2%20State%20Rd%2046,%20bloomington,%20IN&t=k&z=19&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
      ></iframe>
    </div>
  );
}

function VisitUs() {
  const hours = useSite().hours;
  const address = useSite().address;
  const contact = useSite().contact;

  return (
    <div className={styles["section__visit-us"]}>
      <div className={styles["visit-us__hours"]}>
        <h3>Hours</h3>
        {hours.map((hour) => (
          <p key={hour[0] + hour[-1] + hour}>{hour}</p>
        ))}
      </div>
      <div className={styles["visit-us__address"]}>
        <h3>Address</h3>
        <p style={{ textTransform: "capitalize" }}>
          <span>{address.street}</span>
          <span>{address.city + " " + address.zipcode}</span>
        </p>
      </div>
      <div className={styles["visit-us__contact"]}>
        <h3>Contact</h3>
        <a href={"tel:" + contact.number}>
          <p>{contact.number}</p>
        </a>
        <a href={"mailto:" + contact.email}>
          <p>{contact.email}</p>
        </a>
      </div>
    </div>
  );
}

export { Map, VisitUs };
