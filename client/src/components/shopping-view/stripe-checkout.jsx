import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "../ui/button";
import { useState } from "react";
import { useToast } from "../ui/use-toast";

// Replace with your actual publishable key
const stripePromise = loadStripe("pk_test_51QrLBFFagJkBf2d6FqhCa15fPN5UK90KdtZxWJp9LIBO4dgyTUdOIUc85LPMFFVRfCYdXpupJMNklOPy0Qh0OM5z00byHSQLKF");

function CheckoutForm({ orderId, onPaymentSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/shop/payment-success`,
      },
      redirect: "if_required",
    });

    if (error) {
      toast({
        title: error.message,
        variant: "destructive",
      });
      setIsProcessing(false);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      onPaymentSuccess(paymentIntent.id, orderId);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full"
      >
        {isProcessing ? "Processing Payment..." : "Pay Now"}
      </Button>
    </form>
  );
}

export default function StripeCheckout({ clientSecret, orderId, onPaymentSuccess }) {
  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <div className="border rounded-lg p-6 mt-4">
      <h3 className="text-lg font-bold mb-4">Complete Payment with Stripe</h3>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm orderId={orderId} onPaymentSuccess={onPaymentSuccess} />
      </Elements>
    </div>
  );
}
