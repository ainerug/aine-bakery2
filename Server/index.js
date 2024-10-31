const express = require("express");
require("./DB/conn");
const cors = require("cors");
const Cakes = require("./Model/Cakes");
const Orders = require("./Model/Order");
const Auth = require("./Model/Auth");
const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json({limit: "10mb"}));

app.get("/",  (req, res) => {
    res.send("Welcome to Aine Bakery");
})


app.post("/cakes", async (req, res) => {
    try {
        const addCake = new Cakes(req.body);
        addCake.save().then(()=>{
            res.status(200).send(addCake);
        }).catch((e)=>{
            res.status(404).send(e);
        })
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/cakes", async (req, res)=> {
    try {
        const allCakes = await Cakes.find();
        res.status(200).send(allCakes);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/cakes/category/:category", async (req, res)=> {
    try {
        const allCakes = await Cakes.find({category: req.params.category});
        res.status(200).send(allCakes);
    } catch (error) {
        res.status(404).send(error);
    }
})


app.patch("/cakes/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const editCakes = await Cakes.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).send(editCakes);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/cakes/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const editCakes = await Cakes.findById(id);
        res.status(200).send(editCakes);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/mycakes/:sellerId", async (req, res) => {
    try {
        const sellerId = req.params.sellerId;

        const getCakes = await Cakes.find({sellerId: sellerId});
        res.status(200).send(getCakes);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/myorders/:customerId", async (req, res) => {
    try {
        const customerId = req.params.customerId;

        const getCakes = await Orders.find({customerId: customerId});
        res.status(200).send(getCakes);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/sellerorders/:sellerId", async (req, res) => {
    try {
        const sellerId = req.params.sellerId;

        const getCakes = await Orders.find({sellerId: sellerId});
        res.status(200).send(getCakes);
    } catch (error) {
        res.status(404).send(error);
    }
})


app.get("getcustomerorders/:orderstatus/:customerId", async (req, res) => {
    try {
        const orderStatus = req.params.orderstatus;
        const customerId = req.params.customerId;

        const orders = await Orders.find({orderStatus: orderStatus}, {customerId: customerId});
        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("getsellerorders/:orderstatus/:sellerId", async (req, res) => {
    try {
        const orderStatus = req.params.orderstatus;
        const sellerId = req.params.sellerId;

        const orders = await Orders.find({orderStatus: orderStatus}, {sellerId: sellerId});
        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.delete("/cakes/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const editCakes = await Cakes.findByIdAndDelete(id);
        res.status(200).send(editCakes);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.post("/orders", async (req, res) => {
    try {
        const addCake = new Orders(req.body);
        addCake.save().then(()=>{
            res.status(200).send(addCake);
        }).catch((e)=>{
            res.status(404).send(e);
        })
    } catch (error) {
        res.status(404).send(error);
    }
})

app.get("/orders", async (req, res)=> {
    try {
        const allCakes = await Orders.find();
        res.status(200).send(allCakes);
    } catch (error) {
        res.status(404).send(error);
    }
})


app.delete("/orders/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const order = await Orders.findByIdAndDelete(id);
        res.status(200).send(order);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.post("/signup", async (req, res) => {
    try {
        const user = await Auth.find({email: req.body.email});

        if(user.length > 0){
            res.status(404).send("Email already exists");
        }
        else{
            const newUser = new Auth(req.body);
            newUser.save();
            res.status(200).send(newUser);
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

app.post("/login", async (req, res) => {
    try{
        const findUser = await Auth.findOne({email: req.body.email});

        if(findUser !== null){
            if(findUser.password.toString() === req.body.password.toString()){
                res.status(200).send(findUser);
            }
            else{
                res.status(404).send("Invalid Password!");
            }
        }
        else{
            res.status(404).send("Invalid Email!");
        }
    }
    catch (error) {
        res.status(404).send(error);
    }
})


app.listen(PORT, () => {
    console.log("Api is running on PORT: "+ PORT);
})