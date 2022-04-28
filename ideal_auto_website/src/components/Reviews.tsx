import React from "react";
import { Review } from "../types/types";
import { useSite } from "./../hooks/use_site_context";
import styles from "./Reviews.module.css";
import { Capitalize } from "../Utils";

function Reviews() {
  const reviews = useSite().reviews;

  return (
    <div className={styles["section__reviews"]}>
      <h1>Reviews</h1>
      <div className={styles["reviews__container"]}>
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard(review: Review) {
  const { starIcon__filled, starIcon__empty } = useSite().imagePaths;
  const rating = Number(review.rating);

  return (
    <div className={styles["section__review-card"]}>
      <a href={review.url} target="_blank">
        <div
          className={styles["review-card__name"]}
          style={{ textTransform: "capitalize" }}
        >
          {review.name}
        </div>
        <div className={styles["review-card__rating"]}>
          {[...Array(5)].map((value, i) => (
            <img
              className={styles["review-card__stars"]}
              alt=""
              key={i}
              src={i + 1 <= rating ? starIcon__filled : starIcon__empty}
            />
          ))}
        </div>
        <div className={styles["review-card__body"]}>
          {Capitalize(review.body)}
        </div>
      </a>
    </div>
  );
}

export { Reviews, ReviewCard };
