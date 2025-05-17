const express = require("express"); 
const mongoose = require("mongoose");
const userRoute = require('./Routes/userRoutes');
const dotnev = require('dotenv');
const cors = require("cors");
const Razorpay = require('razorpay');

dotnev.config();

const app= express();
const port = process.env.PORT || 5000;

//middleware to access the body(text/html) written on screen 
app.use(cors({
    origin:"*",
    methods: ['GET','POST'],
}));
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

//connection to data
mongoose
    .connect("mongodb://127.0.0.1:27017/Shippeddd")
    .then(() =>  console.log("Mongo db connected"))
    .catch((err) => console.log("error",err));

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post('/create-order', async (req, res) => {
  const amount = req.body.amount;
  const currency = req.body.currency || 'INR';

  try {
    const options = {
      amount: amount,
      currency: currency,
      receipt: 'receipt#1',
      payment_capture: 1,
    };

    const response = await razorpay.orders.create(options);
    res.json(response);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

app.use("/users", userRoute);

app.listen(port, ()=>
    console.log(`server running on port ${port}`)
)
