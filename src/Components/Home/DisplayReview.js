import React from 'react';

const DisplayReview = ({ r }) => {
    const {userName, rating, review} = r;


    return (
        <div class="card-body rounded-2xl shadow-2xl">
          <h2 class="card-title">{userName}</h2>
          <p>{rating} ⭐</p>
          <p>{review}</p>
        </div>
    );
};

export default DisplayReview;