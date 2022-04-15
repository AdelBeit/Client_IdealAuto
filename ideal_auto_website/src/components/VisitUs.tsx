import React from "react";

export default function VisitUs(props) {
  let hours = [
    ["Monday", "8:30am - 5:00pm"],
    ["Tuesday", "8:30am - 5:00pm"],
    ["Wednesday", "8:30am - 5:00pm"],
    ["Thursday", "8:30am - 5:00pm"],
    ["Friday", "8:30am - 5:00pm"],
    ["Saturday", "10:00am - 2:00pm"],
    ["Sunday", "Closed"],
  ];
  hours = props.hours || hours;
  hours = hours.map((day, index) => (
    <p key={index}>
      {day[0].slice(0, 3)}: {day[1]}
    </p>
  ));
  return (
    <>
      <h1>Visit Us</h1>
      <div className="visit-us__map__container">
        <div className="visit-us__map">
          <img alt="" src="http://placekitten.com/20/40" />
        </div>
      </div>
      <div>
        <div className="visit-us__contact">
          <h3>Contact</h3>
          <p>888 - 111 - 2222</p>
          <p>email@domain.com</p>
        </div>
      </div>
      <div>
        <div className="visit-us__address">
          <h3>Address</h3>
          <p>123 West ST Road</p>
          <p>Seattle, WA</p>
          <p>11223</p>
        </div>
      </div>
      <div>
        <div className="visit-us__hours">{hours}</div>
      </div>
    </>
  );
}
