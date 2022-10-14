const express = require("express");
const app = express();
const port = process.env.PORT || 4242;

// This is your test secret API key.
const stripe = require("stripe")('sk_test_51LOrQYKGr3XuaAt4d9fT0XXB8CrL4GKbBHG3t8alb1Yo1aIULBvpbUm8UwDZNWNx5YRSatAzkHJH3Jlx25qlPtow00dTA8p2Ij');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "gbp",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));
  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}




app.listen(port, () => console.log(`Node server listening on port ${port}!`));