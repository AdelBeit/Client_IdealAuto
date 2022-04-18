import React from "react";
import { Review } from "../types/types";
import {useSite} from "./../hooks/use_site_context";


function Reviews() {
  const reviews = useSite().reviews;

  return (
    <div id="section__reviews">
      <h1>Reviews</h1>
      <div className="reviews__container">
        {reviews.map((review) => (
          <ReviewCard key={review.name + review.date} {...review} />
        ))}
        </div>
    </div>
  );
}


function ReviewCard(review: Review) {
  return (
    <div className="section__review-card">
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
