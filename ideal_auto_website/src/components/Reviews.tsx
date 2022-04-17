import React from "react";
import { Review } from "../types/types";

interface ReviewProps {
  children: JSX.Element | JSX.Element[];
}

function Reviews({ children }: ReviewProps) {
  return (
    <div id="section__reviews">
      <div className="reviews__container">{children}</div>
    </div>
  );
}

function ReviewCard(review: Review) {
  return (
    <div className="section__review-card">
      <h1>Reviews</h1>
      <div className="review-card__header">
        <div className="review-card__rating">{review.rating}</div>

        <div className="review-card__date">{review.date}</div>
      </div>
      <div className="review-card__body">{review.body}</div>
      <div className="review-card__footer">~ {review.name}</div>
    </div>
  );
}

export { Reviews, ReviewCard };
