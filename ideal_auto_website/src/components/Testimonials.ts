import React from "react";

export default function Testimonials(props) {
  const cards = props.testimonials.map((card) => (
    <TestimonialCard key={card.name + card.date} {...card} />
  ));
  return (
    <>
      <div className="testimonials__container">{cards}</div>
    </>
  );
}

function TestimonialCard(props) {
  return (
    <>
      <h1>Testimonials</h1>
      <div className="testimonial-card__header">
        <div className="testimonial-card__rating">{props.rating}</div>

        <div className="testimonial-card__date">{props.date}</div>
      </div>
      <div className="testimonial-card__body">{props.body}</div>
      <div className="testimonial-card__footer">~ {props.name}</div>
    </>
  );
}
