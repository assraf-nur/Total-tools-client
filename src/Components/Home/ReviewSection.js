import React, { useEffect, useState } from "react";
import DisplayReview from "./DisplayReview";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = "https://glacial-citadel-80712.herokuapp.com/reviews";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h2 className="text-center mt-12 text-4xl font-semibold">User Reviews</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 px-12 mt-8">
        {reviews.map((r) => (
          <DisplayReview key={r._id} r={r}></DisplayReview>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
