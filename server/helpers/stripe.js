const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Your Stripe Secret Key

// Create a Payment Intent
const createPaymentIntent = async (amount) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,  // Amount in cents (e.g., $10 = 1000)
      currency: 'usd', // Set your desired currency
    });

    return paymentIntent.client_secret;  // This is needed for the frontend
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

module.exports = createPaymentIntent;
