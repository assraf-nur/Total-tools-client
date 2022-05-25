import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe('pk_test_51L3ODWAEPns3Ioviz9zqO4RlzsuzJhh8ME9jjxyLdRcFmkhP4TRbLudtHnrPSryeuPUD5lssOANEMTu8odqG6X4400xim9JH1E');


const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orders/${id}`;

  const {
    data: order,
    isLoading,
  } = useQuery(["orders", id], () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="py-3 text-3xl">Pay here for:</h2>
      <div class="card w-96 bg-base-100 shadow-2xl ml-12 mt-12">
        <div class="card-body">
            <p>Dear, <span className="text-lg font-bold text-primary">{order.userName}</span></p>
          <h2 class="card-title">Your Tools name is <span className="text-lg font-bold text-primary">{order.toolName}</span></h2>
          <p>Total Price: {order.toolPrice} $</p>
          <p>Quantity Amount: {order.quantityAmount} Unit</p>
          <div className="mt-8">
          <Elements stripe={stripePromise}>
                <CheckoutForm order={order}/>
          </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

// pk_test_51L3ODWAEPns3Ioviz9zqO4RlzsuzJhh8ME9jjxyLdRcFmkhP4TRbLudtHnrPSryeuPUD5lssOANEMTu8odqG6X4400xim9JH1E

export default Payment;
