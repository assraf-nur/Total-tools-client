import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {

    const [user] = useAuthState(auth);

    const handleReview = (e) =>{
        e.preventDefault();

        const rating = e.target.rating.value;
        const review = e.target.review.value;
        const userName = user.displayName;


        const reviews = { rating, review, userName };

        fetch('http://localhost:5000/reviews',{
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviews),
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Review Added');
            e.target.reset();
        })
    }

  return (
    <div className="px-12">
      <h2 className="text-2xl font-semibold mt-5"> <span className="text-4xl text-primary font-bold"> {user.displayName} </span>please add a review for us</h2>
      <form onSubmit={handleReview} className="mt-5">
        <input
          required
          type="number"
          name="rating"
          max={5}
          min={1}
          placeholder="Rating"
          class="input input-bordered input-primary w-full max-w-xs"
        />
        <br />
        <textarea required class="textarea textarea-primary mt-8 w-6/12" name="review" placeholder="Review"></textarea>
        <br />
        <button class="btn btn-primary mt-5 text-white">Add review</button>
      </form>
    </div>
  );
};

export default AddReview;
