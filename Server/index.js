const express = require("express");
require("./DB/conn");
const cors = require("cors");
const Cakes = require("./Model/Cakes");
const Orders = require("./Model/Order");
const Auth = require("./Model/Auth");
const Wallet = require("./Model/Wallet");
var nodemailer = require('nodemailer');


const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
const dotenv = require('dotenv');
dotenv.config();
const stripe = require("stripe")(
    process.env.STRIPE_SECRET
);
const calculateOrderAmount = (items) => {
  let total = 0;
  items.forEach((item) => {
    total += item.amount;
  });
  return total;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    // [DEV]: For demo purposes only, you should avoid exposing the PaymentIntent ID in the client-side code.
    dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to Aine Bakery");
});

app.post("/cakes", async (req, res) => {
  try {
    const addCake = new Cakes(req.body);
    addCake
      .save()
      .then(() => {
        res.status(200).send(addCake);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/cakes", async (req, res) => {
  try {
    const allCakes = await Cakes.find();
    res.status(200).send(allCakes);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/cakes/category/:category", async (req, res) => {
  try {
    const allCakes = await Cakes.find({ category: req.params.category });
    res.status(200).send(allCakes);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.patch("/cakes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const editCakes = await Cakes.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(editCakes);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/cakes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const editCakes = await Cakes.findById(id);
    res.status(200).send(editCakes);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/mycakes/:sellerId", async (req, res) => {
  try {
    const sellerId = req.params.sellerId;

    const getCakes = await Cakes.find({ sellerId: sellerId });
    res.status(200).send(getCakes);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/myorders/:customerId", async (req, res) => {
  try {
    const customerId = req.params.customerId;

    const getCakes = await Orders.find({ customerId: customerId });
    res.status(200).send(getCakes);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/sellerorders/:sellerId", async (req, res) => {
  try {
    const sellerId = req.params.sellerId;

    const getCakes = await Orders.find({ sellerId: sellerId });
    res.status(200).send(getCakes);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/getcustomerorders/:orderstatus/:customerId", async (req, res) => {
  try {
    const orderStatus = req.params.orderstatus;
    const customerId = req.params.customerId;

    const orders = await Orders.find({
      orderStatus: orderStatus,
      customerId: customerId,
    });
    res.status(200).send(orders);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/getsellerorders/:orderstatus/:sellerId", async (req, res) => {
  try {
    const orderStatus = req.params.orderstatus;
    const sellerId = req.params.sellerId;

    const orders = await Orders.find({
      orderStatus: orderStatus,
      sellerId: sellerId,
    });
    res.status(200).send(orders);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.delete("/cakes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const editCakes = await Cakes.findByIdAndDelete(id);
    res.status(200).send(editCakes);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.post("/orders", async (req, res) => {
  try {
    const addCake = new Orders(req.body);
    addCake
      .save()
      .then(() => {
        res.status(200).send(addCake);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/orders", async (req, res) => {
  try {
    const allCakes = await Orders.find();
    res.status(200).send(allCakes);
  } catch (error) {
    res.status(404).send(error);
  }
});


app.get("/orders/:id", async (req, res) => {
  try {
    const allCakes = await Orders.findById(req.params.id);
    res.status(200).send(allCakes);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.delete("/orders/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const order = await Orders.findByIdAndDelete(id);
    res.status(200).send(order);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.patch("/orders/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateOrder = await Orders.findByIdAndUpdate(id, req.body);
    res.status(200).send(updateOrder);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.post("/signup", async (req, res) => {
  try {
    const user = await Auth.find({ email: req.body.email });

    if (user.length > 0) {
      res.status(404).send("Email already exists");
    } else {
      const newUser = new Auth(req.body);
      newUser.save();
      res.status(200).send(newUser);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

app.post("/wallet", async (req, res) => {
  try {
    const addInfo = new Wallet(req.body);
    addInfo.save().then(()=>{
      res.status(200).send(addInfo);
    }).catch((e)=>{
      res.status(404).send(e);
    })
  } catch (error) {
    res.status(404).send(error);
  }
})

app.get("/wallet/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const totalEarnings = await Wallet.find({sellerId: userId, orderStatus: "completed"});
    const expectedEarnings =await  Wallet.find({sellerId: userId, orderStatus: "ongoing"});
    const canceledEarnings =await  Wallet.find({sellerId: userId, orderStatus: "canceled"});


    let sum = 0;
    let totalCancelationSum = 0;
    let totalExpectedSum = 0;

    for(let i = 0; i < totalEarnings.length; i++){
      sum += totalEarnings[i].amount;
    }

    for(let i = 0; i < expectedEarnings.length; i++){
      totalExpectedSum += expectedEarnings[i].amount;
    }

    for(let i = 0; i < canceledEarnings.length; i++){
      totalCancelationSum += canceledEarnings[i].amount;
    }

    let avgOrderPrice = sum / totalEarnings.length;

    res.status(200).send({
      totalEarnings,
      expectedEarnings,
      avgOrderPrice,
      "totalEarningsSum": sum,
      "totalExpectedEarningsSum": totalExpectedSum,
      "totalCanceled": totalCancelationSum
    })
    
  } catch (error) {
    res.status(404).send(error);
  }
})

app.patch("/wallet/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const updateWallet = await Wallet.findOneAndUpdate({orderId: orderId}, req.body, {new: true});
    res.status(200).send(updateWallet);
  } catch (error) {
    res.status(404).send(error);
  }
})

app.post("/login", async (req, res) => {
  try {
    const findUser = await Auth.findOne({ email: req.body.email });

    if (findUser !== null) {
      if (findUser.password.toString() === req.body.password.toString()) {
        res.status(200).send(findUser);
      } else {
        res.status(404).send("Invalid Password!");
      }
    } else {
      res.status(404).send("Invalid Email!");
    }
  } catch (error) {
    res.status(404).send(error);
  }
});




app.post("/sendmail", async (req, res) => {
  try {
    const {email, subject, message, name} = req.body;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'autoemail1234321@gmail.com',
        pass: 'lleyvkvmwiyrpury'
      }
    });
    
    var mailOptions = {
      from: 'autoemail1234321@gmail.com',
      to: "ainevinted@gmail.com",
      subject: subject,
      html: `
      <html>
        <head>
          <title> Email <title/>
        </head>

        <body>
          <h1>New Query from Cake app</h1>
          <p>Name of the customer: ${name}</p>
          <p>Email of the customer: ${email}</p>
          <p>Subject: ${subject}</p>
          <p>Message:</p>
          <p>${message}</p>
        </body>
      </html>
      `
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(404).send(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send("Email sent!");
      }
    });
  } catch (error) {
    res.status(404).send(error);
  }
})



app.listen(PORT, () => {
  console.log("Api is running on PORT: " + PORT);
});
