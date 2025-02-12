import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements } from "@stripe/react-stripe-js";

import axios from "axios";

// Make sure to use your own public key
const stripePromise = loadStripe("pk_test_51QrLBFFagJkBf2d6FqhCa15fPN5UK90KdtZxWJp9LIBO4dgyTUdOIUc85LPMFFVRfCYdXpupJMNklOPy0Qh0OM5z00byHSQLKF");

const StripeContainer = () => {
  const [amount, setAmount] = useState(1000); // Amount in cents (e.g., $10 = 1000 cents)

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a payment intent on the backend
    const { data } = await axios.post("http://localhost:3001/create-payment-intent", {
      amount: amount,
    });

    // Use the client secret from the backend
    const { clientSecret } = data;

    // Create a Stripe instance
    const stripe = await stripePromise;

    // Use Stripe.js to handle the client-side confirmation
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: CardElement, // cardElement will be the CardInput component
        billing_details: {
          name: "Customer Name",
        },
      },
    });

    if (error) {
      console.error(error.message);
    } else if (paymentIntent.status === "succeeded") {
      alert("Payment succeeded!");
    }
  };

  return (
    <div>
      <h2>Pay with Stripe</h2>
      <form onSubmit={handleSubmit}>
        {/* Add Stripe Elements for card input */}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

const StripeWrapper = () => (
    <Elements stripe={stripePromise}>
      <StripeContainer />
    </Elements>
  );

export default StripeContainer;
