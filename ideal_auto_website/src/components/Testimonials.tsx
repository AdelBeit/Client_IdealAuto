import React from "react";

type Testimonial = {
  rating: string;
  date: string;
  body: string;
  name: string;
};

interface TestimonialProps {
  children: JSX.Element | JSX.Element[];
}

function Testimonials({ children }: TestimonialProps) {
  return (
    <>
      <div className="testimonials__container">{children}</div>
    </>
  );
}

function TestimonialCard(testimonial: Testimonial) {
  return (
    <>
      <h1>Testimonials</h1>
      <div className="testimonial-card__header">
        <div className="testimonial-card__rating">{testimonial.rating}</div>

        <div className="testimonial-card__date">{testimonial.date}</div>
      </div>
      <div className="testimonial-card__body">{testimonial.body}</div>
      <div className="testimonial-card__footer">~ {testimonial.name}</div>
    </>
  );
}

export { Testimonials, TestimonialCard };
