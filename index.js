const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product.js");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");



mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connection Successful")).catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);



app.listen(process.env.PORT || 5000, ()=> {
    console.log("Backend Server is running at 5000!!");
});